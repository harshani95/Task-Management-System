package com.harshani.taskManage.service.impl;

import com.harshani.taskManage.dto.request.RequestUserDto;
import com.harshani.taskManage.entity.User;
import com.harshani.taskManage.repo.UserRepo;
import com.harshani.taskManage.service.UserService;
import com.harshani.taskManage.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepo userRepo;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    @Override
    public String signup(RequestUserDto userDto) {
        User user = new User(
                userDto.getUsername(),
                userDto.getEmail(),
                passwordEncoder.encode(userDto.getPassword()),
                userDto.getRole()
        );

        userRepo.save(user);
        return user.getUsername()+ " saved";
    }

    @Override
    public String login(RequestUserDto userDto) {
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(userDto.getEmail(),
                        userDto.getPassword()));

        User user = userRepo.findByEmail(userDto.getEmail()).orElseThrow(() -> new RuntimeException("User not found"));

        String jwt = jwtUtil.generateToken(user);
        return jwt;
    }
}

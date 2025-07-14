package com.harshani.taskManage.service.impl;

import com.harshani.taskManage.dto.request.RequestUserDto;
import com.harshani.taskManage.entity.User;
import com.harshani.taskManage.repo.UserRepo;
import com.harshani.taskManage.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepo userRepo;

    @Override
    public String signup(RequestUserDto userDto) {
        User user = new User(
                userDto.getName(),
                userDto.getUsername(),
                passwordEncoder.encode(userDto.getPassword())

        );

        userRepo.save(user);
        return user.getUsername()+ " saved";
    }
}

package com.harshani.taskManage.service.impl;

import com.harshani.taskManage.entity.User;
import com.harshani.taskManage.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@RequiredArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepo userRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User selectedUser = userRepo.findByUsername(username);
        if (selectedUser == null) {
            throw new UsernameNotFoundException("User not found", null);
        }

        return new org.springframework.security.core.userdetails.User(
                selectedUser.getUsername(),
                selectedUser.getPassword(),
                new ArrayList<>());

    }
}

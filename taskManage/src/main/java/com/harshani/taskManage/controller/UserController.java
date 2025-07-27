package com.harshani.taskManage.controller;

import com.harshani.taskManage.dto.request.RequestUserDto;

import com.harshani.taskManage.service.UserService;
import com.harshani.taskManage.service.impl.ApplicationUserServiceImpl;
import com.harshani.taskManage.util.JwtUtil;
import com.harshani.taskManage.util.StandardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private final UserService userService;

    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    private final ApplicationUserServiceImpl applicationUserService;


    @PostMapping(path = "/signup")
    public ResponseEntity<StandardResponse> signup(@RequestBody RequestUserDto userDto){
        userService.signup(userDto);
        return new ResponseEntity<>(
                new StandardResponse(201,"User Created!",userDto),
                HttpStatus.CREATED
        );
    }

    @PostMapping(path = "/login")
    public ResponseEntity<StandardResponse> login(@RequestBody RequestUserDto userDto){
        String token = userService.login(userDto);

        return new ResponseEntity<>(
                new StandardResponse(200,"Successfully logged",token),
                HttpStatus.OK
        );
    }


}

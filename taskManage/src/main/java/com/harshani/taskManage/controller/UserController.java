package com.harshani.taskManage.controller;

import com.harshani.taskManage.dto.request.RequestUserDto;
import com.harshani.taskManage.jwt.AuthenticationRequest;
import com.harshani.taskManage.service.UserService;
import com.harshani.taskManage.service.impl.UserDetailsServiceImpl;
import com.harshani.taskManage.util.JwtUtil;
import com.harshani.taskManage.util.StandardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;

    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsServiceImpl userDetailsService;


    @PostMapping("/register")
    public ResponseEntity<StandardResponse> registerUser(@RequestBody RequestUserDto userDto){
        String name =userService.signup(userDto);
        return new ResponseEntity<>(
                new StandardResponse(201,"user was saved!", name),
                HttpStatus.CREATED
        );
    }

    @PostMapping("/login")
    public ResponseEntity<StandardResponse> loginUser(@RequestBody AuthenticationRequest authenticationRequest) {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                authenticationRequest.getPassword()));

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails.getUsername());

        return new ResponseEntity<>(
                new StandardResponse(HttpStatus.OK.value(), "Authentication successful", jwt),
                HttpStatus.OK
        );
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<StandardResponse> handleAuthenticationException(AuthenticationException e) {
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        return new ResponseEntity<>(
                new StandardResponse(status.value(), "Invalid username or password. please try again" ,null),
                status
        );
    }
}

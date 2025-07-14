package com.harshani.taskManage.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RequestUserDto {
    private String name;
    private String username;
    private String password;
}

package com.harshani.taskManage.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseUserDto {
    private Long id;
    private String name;
    private String username;
    private String password;
}

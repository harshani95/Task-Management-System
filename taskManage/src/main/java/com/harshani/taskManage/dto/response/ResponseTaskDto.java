package com.harshani.taskManage.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseTaskDto {
    private Long id;
    private String name;
    private String employee;
    private Date startDate;
    private Date endDate;
    private String status;
}

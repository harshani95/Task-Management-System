package com.harshani.taskManage.service;

import com.harshani.taskManage.dto.request.RequestTaskDto;
import com.harshani.taskManage.dto.request.UpdateTaskDto;
import com.harshani.taskManage.dto.response.ResponseTaskDto;

import java.util.List;

public interface TaskService {

     void saveTask(RequestTaskDto requestTaskAssignDto);

     void updateTask(long id, UpdateTaskDto updateStatusDto);

     ResponseTaskDto getTaskById(long id);

     void deleteTask(long id);

     List<ResponseTaskDto> getAllTasks();

     List<ResponseTaskDto> getAllTasksByStatus(String status);

     List<ResponseTaskDto> getAllTasksByEmployee(String employee);


}

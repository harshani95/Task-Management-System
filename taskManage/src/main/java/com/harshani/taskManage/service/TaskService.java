package com.harshani.taskManage.service;

import com.harshani.taskManage.dto.request.RequestTaskDto;
import com.harshani.taskManage.dto.request.UpdateTaskDto;
import com.harshani.taskManage.dto.response.ResponseTaskDto;

import java.util.List;

public interface TaskService {
    void saveTask(RequestTaskDto requestTaskDto);

    void updateTask(long id, UpdateTaskDto updateTaskDto);

    ResponseTaskDto getTaskById(long id);

    void deleteTask(long id);

    List<ResponseTaskDto> getAllTasks();

    List<ResponseTaskDto> getAllTasksByEmployee(String employee);
}

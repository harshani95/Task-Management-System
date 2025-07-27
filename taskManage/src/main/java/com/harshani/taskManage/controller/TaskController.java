package com.harshani.taskManage.controller;


import com.harshani.taskManage.dto.request.RequestTaskDto;
import com.harshani.taskManage.dto.request.UpdateTaskDto;
import com.harshani.taskManage.dto.response.ResponseTaskDto;
import com.harshani.taskManage.service.impl.TaskServiceImpl;
import com.harshani.taskManage.util.StandardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
    private final TaskServiceImpl taskService;

    @PostMapping(path = "/admin/save")
    public ResponseEntity<StandardResponse> saveTask(@RequestBody RequestTaskDto requestTaskDto){
        taskService.saveTask(requestTaskDto);
        return new ResponseEntity<>(
                new StandardResponse(201,"Task Saved",requestTaskDto.getName()),
                HttpStatus.CREATED
        );
    }

    @GetMapping("/admin/get-by-id/{id}")
    public ResponseEntity<StandardResponse> findTask(@PathVariable long id){
        return new ResponseEntity<>(
                new StandardResponse(200,"Task Assigned data!",taskService.getTaskById(id)),
                HttpStatus.OK
        );
    }

    @PutMapping(path = "/admin/update/{id}")
    public ResponseEntity<StandardResponse> updateTask(
            @PathVariable(value = "id") long id,
            @RequestBody UpdateTaskDto requestUpdateStatusDto
    ){
        taskService.updateTask(id,requestUpdateStatusDto);
        return new ResponseEntity<>(
                new StandardResponse(201,"updated data!",requestUpdateStatusDto.getStatus()),
                HttpStatus.CREATED
        );
    }

    @DeleteMapping(path = "/admin/delete/{id}")
    public ResponseEntity<StandardResponse> deleteTask(@PathVariable(value = "id") long id){
        taskService.deleteTask(id);
        return new ResponseEntity<>(
                new StandardResponse(204,"deleted data!",id),
                HttpStatus.NO_CONTENT
        );
    }

    @GetMapping(path = "/admin-user/get-all-tasks")
    public ResponseEntity<StandardResponse> getAllTasks() {
        List<ResponseTaskDto> allTasks = taskService.getAllTasks();
        return new ResponseEntity<>(
                new StandardResponse(200, "All Tasks", allTasks), HttpStatus.OK
        );
    }

    @GetMapping(path = "/admin/get-by-employee/{employee}")
    public ResponseEntity<StandardResponse> getAllTasksByEmployee(
            @PathVariable(value = "employee") String employee){
        List<ResponseTaskDto> allMembers = taskService.getAllTasksByEmployee(employee);
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200,"All Members",allMembers),HttpStatus.OK
        );
    }

}

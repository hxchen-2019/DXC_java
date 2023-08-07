package com.quantum.onboarding.controller;

import com.quantum.onboarding.exception.*;
import com.quantum.onboarding.model.User;
import com.quantum.onboarding.service.ProtectedUserService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@Api("User API")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController {

        @Autowired
        private ProtectedUserService protectedUserService;

        @ApiOperation(value = "Get all current users in database", notes = "Returns a list of users")
        @GetMapping("/users")
        public ResponseEntity<List<User>> getUsers() {
                return new ResponseEntity<>(protectedUserService.getAllUsers(), HttpStatus.OK);
        }

        @ApiOperation(value = "Get user by username", notes = "Returns user if available")
        @PostMapping()
        @CrossOrigin(origins = "http://localhost:3000")
        @ApiResponses(value = {
                        @ApiResponse(code = 200, message = "User found"),
                        @ApiResponse(code = 404, message = "User not found")
        })
        public ResponseEntity<User> getUserByUsername(@RequestBody User request) throws NotFoundException {
                User user = protectedUserService.getUserByUsername(request.getUsername());
                return new ResponseEntity<>(user, HttpStatus.OK);
        }

        @ApiOperation(value = "Login", notes = "Returns User if username and password matches")
        @PostMapping("/login")
        @ApiResponses(value = {
                        @ApiResponse(code = 200, message = "Login successful"),
                        @ApiResponse(code = 401, message = "Password mismatch"),
                        @ApiResponse(code = 404, message = "Username not found")
        })
        public ResponseEntity<User> login(
                        @ApiParam(name = "User login details", value = "JSON object with username, password") @RequestBody User request)
                        throws NotFoundException, WrongPasswordException {
                User user;
                user = protectedUserService.login(request.getUsername(), request.getPassword());
                return new ResponseEntity<>(user, HttpStatus.OK);
        }
}

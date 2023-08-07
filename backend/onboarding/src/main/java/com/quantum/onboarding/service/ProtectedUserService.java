package com.quantum.onboarding.service;

import com.quantum.onboarding.exception.NotFoundException;
import com.quantum.onboarding.exception.WrongPasswordException;
import com.quantum.onboarding.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ProtectedUserService extends UserService{

    Logger logger = LoggerFactory.getLogger(ProtectedUserService.class);

    @Override
    public User login(String username, String password) throws NotFoundException, WrongPasswordException {
        User existingUser = super.getUserByUsername(username);
        if (existingUser.getPassword().equals(password)) {
            return existingUser;
        } else {
            throw new WrongPasswordException("Incorrect password for user: " + username);
        }
    }
}

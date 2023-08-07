package com.quantum.onboarding.service;

import com.quantum.onboarding.exception.*;
import com.quantum.onboarding.model.User;

import com.quantum.onboarding.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
abstract class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    Logger logger = LoggerFactory.getLogger(UserService.class);

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByUsername(String username) throws NotFoundException {
        Optional<User> user = userRepository.findUserByUsername(username);
        if (user.isPresent()) {
            return user.get();
        }
        throw new NotFoundException("No user with username: " + username + ", found in database.");
    }

    // Alternate method to find user using the ObjectId
    // public Optional<User> getUser(ObjectId id) { return
    // userRepository.findById(id); }

    public List<User> getAllUsersByType(String userType, boolean isDeleted) {
        Query query = new Query();
        query.addCriteria(Criteria.where("userType").is(userType.toString()));
        return mongoTemplate.find(query, User.class).stream()
                .collect(Collectors.toList());
    }

    abstract public User login(String username, String password) throws NotFoundException, WrongPasswordException;
}

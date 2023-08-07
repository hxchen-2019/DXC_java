package com.quantum.onboarding.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

@Document(collection = "username")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private ObjectId id;

    private String username;

    private String name;

    private String password;

    private String userType;

    public User(String username, String password, String userType, String name) {
        this.username = username;
        this.password = password;
        this.userType = userType;
        this.name = name;
    }


    @Override
    public String toString() {
        return "User: " +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", type=" + userType +
                ", name=" + name;
    }
}

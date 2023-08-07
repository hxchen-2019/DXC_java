package com.quantum.onboarding.exception;

public class AdminOnlyException extends Exception{

    public AdminOnlyException(String message) {
        super(message);
    }

    public AdminOnlyException() {
        super("This feature is only for Admins!");
    }
}

package com.quantum.onboarding.exception;

public class VendorOnlyException extends Exception{
    public VendorOnlyException() {
        super("This feature is only for Vendors!");
    }
}

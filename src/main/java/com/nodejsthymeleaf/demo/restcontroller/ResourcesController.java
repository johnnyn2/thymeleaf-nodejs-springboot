package com.nodejsthymeleaf.demo.restcontroller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourcesController {
    @GetMapping("getString")
    public String getResources() {
        return "test";    
    } 
}

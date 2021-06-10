package com.nodejsthymeleaf.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MvcController {
    @GetMapping("/")
    public String home() {
        return "index";
    }
    @GetMapping("/posts")
    public String posts() {
        return "posts";
    }
}

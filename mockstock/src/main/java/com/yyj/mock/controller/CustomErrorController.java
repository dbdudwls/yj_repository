package com.yyj.mock.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CustomErrorController implements ErrorController {

    @GetMapping("/error")
    public String handleError() {
        // 커스텀 오류 페이지로 리다이렉션
        return "errorView";
    }

    public String getErrorPath() {
        return "/error";
    }
}

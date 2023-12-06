package com.yyj.mock.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.yyj.mock.service.stockinfoapi;

@Controller
public class controller {

    @Autowired
    private stockinfoapi stockinfoapi;

    @GetMapping("/")
    public String mainPage(Model model) {
        try {
            // stockinfoapi에서 JSON 데이터를 가져옵니다.
            String jsonStockInfo = stockinfoapi.getStockInfo();
            // 모델에 JSON 데이터를 추가합니다.
            model.addAttribute("stockInfo", jsonStockInfo);
            // "main" 뷰 템플릿을 보여줍니다.
            return "main";
        } catch (IOException e) {
            e.printStackTrace();
            return "errorView";
        }
    }
}

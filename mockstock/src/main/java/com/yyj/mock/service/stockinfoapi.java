package com.yyj.mock.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class stockinfoapi {
	
	@Autowired
	public String getStockInfo() throws IOException {
	        // API 요청 URL 생성
	        String requestUrl = "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?"
	                + "serviceKey=hVvHLUgUAcJBjzZotO1F1QebWmYFRNq481DDX5vCI%2FT4A0ZcYGrntz6jWGAvZElbpUkh816kbxjxEDdhG%2F6wcg%3D%3D&numOfRows=1"
	                + "&resultType=json&itmsNm=%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90";

	        // HTTP GET 요청 보내기
	        URL url = new URL(requestUrl);
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setRequestMethod("GET");

	        // 응답 코드 확인
	        int responseCode = conn.getResponseCode();
	        System.out.println("Response Code: " + responseCode);

	        // 응답 데이터 읽기
	        if (responseCode == HttpURLConnection.HTTP_OK) {
	            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	            String inputLine;
	            StringBuilder response = new StringBuilder();

	            while ((inputLine = in.readLine()) != null) {
	                response.append(inputLine);
	            }
	            in.close();

	            // JSON 응답을 문자열로 반환
	            return response.toString();
	        } else {
	            System.out.println("HTTP GET 요청 실패");
	        }

	        // 연결 종료
	        conn.disconnect();

	        return null;
	    }
}

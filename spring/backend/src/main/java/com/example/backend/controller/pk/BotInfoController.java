package com.example.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.ClientInfoStatus;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/pk/")
public class BotInfoController {

    @RequestMapping("getbotinfo/")
    public Map<String,String> getBotInfo(){
//        List<String> list = new LinkedList<>();
//        list.add("sword");
//        list.add("apple");
//        return list;
        Map<String,String> map = new HashMap<>();
        map.put("name","tiger");
        map.put("name1","tiger1");
        return map;

    }
}

package com.page.demo.controller;

import com.page.demo.entity.City;
import com.page.demo.service.CityService;
import com.page.utils.pagination.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class PageDemoController {

    @Autowired
    CityService cityService;

    @RequestMapping("/demo")
    public String pageDemo(Page<City> page,City city, HttpServletRequest request) {
        page.setObj(city);
        /*Map<String,Object> params = new HashMap<>();
        if(city.getCode() != null){
            params.put("code","%"+city.getCode()+"%");
        }
        page.setParams(params);*/
        List<City> cityList = cityService.findPage(page);
        request.setAttribute("cityList", cityList);
        request.setAttribute("page", page);
        request.setAttribute("city", city);
        return "/index";
    }


}

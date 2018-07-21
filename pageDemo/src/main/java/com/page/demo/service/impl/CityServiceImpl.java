package com.page.demo.service.impl;

import javax.annotation.Resource;

import com.page.demo.dao.CityMapper;
import com.page.demo.entity.City;
import com.page.utils.pagination.Page;
import org.springframework.stereotype.Service;

import com.page.demo.service.CityService;

import java.util.List;

@Service("userService")
public class CityServiceImpl implements CityService {

	@Resource
	private CityMapper cityMapper;


	@Override
	public List<City> findPage(Page page) {
		return cityMapper.findPage(page);
	}
}

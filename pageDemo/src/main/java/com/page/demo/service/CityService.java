package com.page.demo.service;

import com.page.demo.entity.City;
import com.page.utils.pagination.Page;

import java.util.List;

public interface CityService {

	List<City> findPage(Page page);
}

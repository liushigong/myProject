package com.page.demo.dao;

import com.page.demo.entity.City;
import com.page.utils.pagination.Page;

import java.util.List;

public interface CityMapper {

	List<City> findPage(Page page);
}

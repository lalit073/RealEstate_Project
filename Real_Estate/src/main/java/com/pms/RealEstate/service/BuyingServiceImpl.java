package com.pms.RealEstate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.RealEstate.dao.BuyingDao;
import com.pms.RealEstate.model.Buying;

@Service
public class BuyingServiceImpl implements BuyingService {

	@Autowired
	private BuyingDao buyingdao;

	public List<Buying> getAllBuyingProperties() {
		return buyingdao.findAll();
	}

}

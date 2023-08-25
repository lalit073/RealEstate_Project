package com.pms.RealEstate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.RealEstate.dao.RentalDao;
import com.pms.RealEstate.model.Rental;


@Service
public class RentalServiceImpl implements RentalService
{
	@Autowired
    private RentalDao rentaldao; // Inject the repository

    public List<Rental> getAllRentedProperties()
     {
          return rentaldao.findAll();
     }

	
}

package com.pms.RealEstate.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pms.RealEstate.model.Rental;

@Repository
public interface RentalDao extends JpaRepository<Rental,Integer>
{
   
}

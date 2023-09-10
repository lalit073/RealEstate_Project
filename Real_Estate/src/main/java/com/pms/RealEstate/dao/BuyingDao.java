package com.pms.RealEstate.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pms.RealEstate.model.Buying;

@Repository
public interface BuyingDao extends JpaRepository<Buying, Integer> {

}

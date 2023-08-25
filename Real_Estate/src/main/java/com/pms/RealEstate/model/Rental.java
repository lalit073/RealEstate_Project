package com.pms.RealEstate.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rental_id;

    
    @JsonIgnoreProperties("rental")
    @OneToOne
    @JoinColumn(name = "property_id")
    private Property property;    
    
    private double expected_rent;

    private double expected_deposit;

    private String preferred_tenants;

	public Rental() {
		super();
	}
	

	public Rental(int rental_id, Property property, double expected_rent, double expected_deposit,
			String preferred_tenants) {
		super();
		this.rental_id = rental_id;
		this.property = property;
		this.expected_rent = expected_rent;
		this.expected_deposit = expected_deposit;
		this.preferred_tenants = preferred_tenants;
	}




	public int getRental_id() {
		return rental_id;
	}

	public void setRental_id(int rental_id) {
		this.rental_id = rental_id;
	}

	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}

	public double getExpected_rent() {
		return expected_rent;
	}

	public void setExpected_rent(double expected_rent) {
		this.expected_rent = expected_rent;
	}

	public double getExpected_deposit() {
		return expected_deposit;
	}

	public void setExpected_deposit(double expected_deposit) {
		this.expected_deposit = expected_deposit;
	}

	public String getPreferred_tenants() {
		return preferred_tenants;
	}

	public void setPreferred_tenants(String preferred_tenants) {
		this.preferred_tenants = preferred_tenants;
	}




	@Override
	public String toString() {
		return "Rental [rental_id=" + rental_id +  ", property=" + property
				+ ", expected_rent=" + expected_rent + ", expected_deposit=" + expected_deposit + ", preferred_tenants="
				+ preferred_tenants + "]";
	}


   
}

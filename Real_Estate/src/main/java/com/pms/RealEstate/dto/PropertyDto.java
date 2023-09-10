package com.pms.RealEstate.dto;

import java.util.Arrays;

import com.pms.RealEstate.model.Accounts;

public class PropertyDto {

	private int property_id;
	private String property_name;
	private String property_type;
	private String bhk_type;
	private double buildup_area;
	private String furnishing_type;
	private int floor;
	private String listing_date;
	private String locality;
	private String landmark_street;
	private String city;
	private String state;
	private int pincode;
	private String description;
	private String operation; // 'buy' or 'rent'
	private double expected_rate; // only for buying
	private double expected_rent; // only for renting
	private double expected_deposit; // only for renting
	private String preferred_tenants; // only for renting
	private byte[] image_1;
    private String email_id;
    
	public PropertyDto() {
		super();
	}

	public PropertyDto(int property_id, String property_name, String property_type, String bhk_type,
			double buildup_area, String furnishing_type, int floor, String listing_date, String locality,
			String landmark_street, String city, String state, int pincode, String description, String operation,
			double expected_rate, double expected_rent, double expected_deposit, String preferred_tenants,
			byte[] image_1, String email_id) {
		super();
		this.property_id = property_id;
		this.property_name = property_name;
		this.property_type = property_type;
		this.bhk_type = bhk_type;
		this.buildup_area = buildup_area;
		this.furnishing_type = furnishing_type;
		this.floor = floor;
		this.listing_date = listing_date;
		this.locality = locality;
		this.landmark_street = landmark_street;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.description = description;
		this.operation = operation;
		this.expected_rate = expected_rate;
		this.expected_rent = expected_rent;
		this.expected_deposit = expected_deposit;
		this.preferred_tenants = preferred_tenants;
		this.image_1 = image_1;
		this.email_id = email_id;
	}

	public int getProperty_id() {
		return property_id;
	}

	public void setProperty_id(int property_id) {
		this.property_id = property_id;
	}

	public String getProperty_name() {
		return property_name;
	}

	public void setProperty_name(String property_name) {
		this.property_name = property_name;
	}

	public String getProperty_type() {
		return property_type;
	}

	public void setProperty_type(String property_type) {
		this.property_type = property_type;
	}

	public String getBhk_type() {
		return bhk_type;
	}

	public void setBhk_type(String bhk_type) {
		this.bhk_type = bhk_type;
	}

	public double getBuildup_area() {
		return buildup_area;
	}

	public void setBuildup_area(double buildup_area) {
		this.buildup_area = buildup_area;
	}

	public String getFurnishing_type() {
		return furnishing_type;
	}

	public void setFurnishing_type(String furnishing_type) {
		this.furnishing_type = furnishing_type;
	}

	public int getFloor() {
		return floor;
	}

	public void setFloor(int floor) {
		this.floor = floor;
	}

	public String getListing_date() {
		return listing_date;
	}

	public void setListing_date(String listing_date) {
		this.listing_date = listing_date;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getLandmark_street() {
		return landmark_street;
	}

	public void setLandmark_street(String landmark_street) {
		this.landmark_street = landmark_street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public double getExpected_rate() {
		return expected_rate;
	}

	public void setExpected_rate(double expected_rate) {
		this.expected_rate = expected_rate;
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

	public byte[] getImage_1() {
		return image_1;
	}

	public void setImage_1(byte[] image_1) {
		this.image_1 = image_1;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	@Override
	public String toString() {
		return "PropertyDto [property_id=" + property_id + ", property_name=" + property_name + ", property_type="
				+ property_type + ", bhk_type=" + bhk_type + ", buildup_area=" + buildup_area + ", furnishing_type="
				+ furnishing_type + ", floor=" + floor + ", listing_date=" + listing_date + ", locality=" + locality
				+ ", landmark_street=" + landmark_street + ", city=" + city + ", state=" + state + ", pincode="
				+ pincode + ", description=" + description + ", operation=" + operation + ", expected_rate="
				+ expected_rate + ", expected_rent=" + expected_rent + ", expected_deposit=" + expected_deposit
				+ ", preferred_tenants=" + preferred_tenants + ", image_1=" + Arrays.toString(image_1) + ", email_id="
				+ email_id + "]";
	}
    
    
}
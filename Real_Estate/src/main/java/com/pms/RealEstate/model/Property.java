package com.pms.RealEstate.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Property {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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

	@OneToOne(mappedBy = "property", cascade = CascadeType.ALL)
	private Rental rental;

	@OneToOne(mappedBy = "property", cascade = CascadeType.ALL)
	private Buying buying;

	@OneToOne(mappedBy = "property", cascade = CascadeType.ALL)
	private Images images;

	private String email_id;

	public Property() {
		super();
	}

	public Property(int property_id, String property_name, String property_type, String bhk_type, double buildup_area,
			String furnishing_type, int floor, String listing_date, String locality, String landmark_street,
			String city, String state, int pincode, String description, Rental rental, Buying buying, Images images,
			String email_id) {
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
		this.rental = rental;
		this.buying = buying;
		this.images = images;
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

	public Rental getRental() {
		return rental;
	}

	public void setRental(Rental rental) {
		this.rental = rental;
	}

	public Buying getBuying() {
		return buying;
	}

	public void setBuying(Buying buying) {
		this.buying = buying;
	}

	public Images getImages() {
		return images;
	}

	public void setImages(Images images) {
		this.images = images;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	
	
}
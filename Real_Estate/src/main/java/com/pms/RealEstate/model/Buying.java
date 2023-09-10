package com.pms.RealEstate.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Buying {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int buying_id;

	@JsonIgnoreProperties("buying")
	@OneToOne
	@JoinColumn(name = "property_id")
	private Property property;

	private double expected_rate;

	public Buying() {
		super();
	}

	public Buying(int buying_id, Property property, double expected_rate) {
		super();
		this.buying_id = buying_id;
		this.property = property;
		this.expected_rate = expected_rate;
	}

	public int getBuying_id() {
		return buying_id;
	}

	public void setBuying_id(int buying_id) {
		this.buying_id = buying_id;
	}

	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}

	public double getExpected_rate() {
		return expected_rate;
	}

	public void setExpected_rate(double expected_rate) {
		this.expected_rate = expected_rate;
	}

	@Override
	public String toString() {
		return "Buying [buying_id=" + buying_id + ", property=" + property + ", expected_rate=" + expected_rate + "]";
	}

}

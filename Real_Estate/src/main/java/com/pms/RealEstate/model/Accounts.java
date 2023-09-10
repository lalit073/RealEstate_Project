package com.pms.RealEstate.model;

import javax.persistence.*;

@Entity
public class Accounts {

	@Id
	private String email_id;
	private String first_name;
	private String last_name;
	private String password;
	private String contact;
	private String address;
	private String role;

	public Accounts() {
		super();
	}

	public Accounts(String email_id, String first_name, String last_name, String password, String contact,
			String address, String role) {
		super();
		this.email_id = email_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.password = password;
		this.contact = contact;
		this.address = address;
		this.role = role;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Accounts [email_id=" + email_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", password=" + password + ", contact=" + contact + ", address=" + address + ", role=" + role + "]";
	}

}

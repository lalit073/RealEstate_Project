package com.pms.RealEstate.model;

import java.sql.Blob;
import java.util.Arrays;

import javax.persistence.*;

@Entity
public class Images {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int image_id;

	@ManyToOne
	@JoinColumn(name = "property_id")
	private Property property;

	@Lob
	private byte[] image_1;

	public Images() {
		super();
	}

	public Images(int image_id, Property property, byte[] image_1) {
		super();
		this.image_id = image_id;
		this.property = property;
		this.image_1 = image_1;
	}

	public int getImage_id() {
		return image_id;
	}

	public void setImage_id(int image_id) {
		this.image_id = image_id;
	}

	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}

	public byte[] getImage_1() {
		return image_1;
	}

	public void setImage_1(byte[] image_1) {
		this.image_1 = image_1;
	}

	@Override
	public String toString() {
		return "Images [image_id=" + image_id + ", property=" + property + ", image_1=" + Arrays.toString(image_1)
				+ "]";
	}

}

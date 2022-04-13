USE MASTER
GO

IF NOT EXISTS (
	SELECT [name]
	FROM sys.databases
	WHERE [name] = N'ShopShop'
	)
CREATE DATABASE ShopShop
GO

USE ShopShop
GO

DROP TABLE IF EXISTS Agent;
DROP TABLE IF EXISTS Listing;
DROP TABLE IF EXISTS [User];

CREATE TABLE Agent (
	Id INTEGER NOT NULL PRIMARY KEY IDENTITY,
	[Name] VARCHAR(55) NOT NULL,
	Phone VARCHAR(55) NOT NULL,
	Email VARCHAR(55) NOT NULL,
	ImgURL VARCHAR(255) NOT NULL,
	);

CREATE TABLE [User] (
	Id INTEGER NOT NULL PRIMARY KEY IDENTITY,
	[Name] VARCHAR(55) NOT NULL,
	Phone VARCHAR(55) NOT NULL,
	[Type] INTEGER NOT NULL,
);

CREATE TABLE Listing (
	Id INTEGER NOT NULL PRIMARY KEY IDENTITY,
	[Address] VARCHAR(55) NOT NULL,
	Squarefoot INTEGER NOT NULL,
	Rent INTEGER NOT NULL,
	Details VARCHAR(55) NOT NULL,
	YearBuilt INTEGER NOT NULL,
	City VARCHAR(55) NOT NULL,
	ImgURL VARCHAR(255) NOT NULL,
	AgentId INTEGER NOT NULL,
	UserId INTEGER NOT NULL,
	CONSTRAINT FK_Listing_Agent FOREIGN KEY (AgentId) REFERENCES Agent(Id) ON DELETE CASCADE,
	CONSTRAINT FK_Listing_User FOREIGN KEY (UserId) REFERENCES [User](Id) ON DELETE CASCADE,
	);


--Type 1 - Buyer, Type - 2 Seller

INSERT INTO AGENT ([Name], Phone, Email, ImgURL) VALUES ('Halie', '555-123-4567', 'halie@shopshop.com', 'https://avatars.dicebear.com/v2/female/91c2e90fb83e3a21d388c84de5746b60.svg')
INSERT INTO AGENT ([Name], Phone, Email, ImgURL) VALUES ('Derek', '555-345-6789', 'derek@shopshop.com', 'https://avatars.dicebear.com/v2/male/bdd61e876afcf343969a266c9fdfb111.svg')
INSERT INTO AGENT ([Name], Phone, Email, ImgURL) VALUES ('Madden', '555-567-7890', 'madden@shopshop.com', 'https://avatars.dicebear.com/v2/male/0156bd784b34e8939bb52051c6f0dc44.svg')
INSERT INTO AGENT ([Name], Phone, Email, ImgURL) VALUES ('David', '555-678-9012', 'david@shopshop.com', 'https://avatars.dicebear.com/v2/male/1277989709535d07963ab9e151a94645.svg')

INSERT INTO [User] ([Name], Phone, [Type]) VALUES ('Jimmy', '123-456-7890', 1)
INSERT INTO [User] ([Name], Phone, [Type]) VALUES ('Jameka', '567-891-2345', 2)
INSERT INTO [User] ([Name], Phone, [Type]) VALUES ('Brain', '345-678-9012', 1)
INSERT INTO [User] ([Name], Phone, [Type]) VALUES ('Dylan', '456-789-1234', 2)

INSERT INTO Listing ([Address], Squarefoot, Rent, Details, YearBuilt, City, ImgURL, AgentId, UserId) VALUES ('123 Main Street Nashville, TN', 10000, 10000, 'Store front, 2 Stories', 1985, 'Nashville', 'https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/listing1image.jpg?toke[…]4MTYzMn0.h4TJ0R_-RQF4hWwPXujPxCeGjvA4_bMxfmUSdiCJNy0' , 1, 3)
INSERT INTO Listing ([Address], Squarefoot, Rent, Details, YearBuilt, City, ImgURL, AgentId, UserId) VALUES ('456 Pennsylvania Ave Nashville, TN', 80000, 80000, 'Parking Garage, 6 Stories', 2008, 'Nashville', 'https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/listing2image.jpg?toke[…]4MTY1Mn0.2efzFJyNW0BBUmM4eSVp1ZbJKgkqOyUqd-WeRfL0s0s' , 2, 1)
INSERT INTO Listing ([Address], Squarefoot, Rent, Details, YearBuilt, City, ImgURL, AgentId, UserId) VALUES ('2000 Broadway Nashville, TN', 8000, 80000, 'Kitchen Equipment, 2 Stories', 1940, 'Nashville', 'https://images1.loopnet.com/i2/o7xywzbrC82huzXMdN62DiYLFRUN1BUeRsOLcIZqEQ8/1/multifamily-property-for-sale-5918-saint-antoine-st-detroit-mi-48202.jpg' , 3, 3)
INSERT INTO Listing ([Address], Squarefoot, Rent, Details, YearBuilt, City, ImgURL, AgentId, UserId) VALUES ('357 Center Street, Franklin, TN', 80000, 80000, 'Parking Lot, 1 Story', 2008, 'Franklin', 'https://bhhscaliber.com/wp-content/uploads/2015/04/commercial-building.jpg' , 4, 4)
INSERT INTO Listing ([Address], Squarefoot, Rent, Details, YearBuilt, City, ImgURL, AgentId, UserId) VALUES ('345 Maple Ave Antioch, TN', 5000, 5000, 'Office Space, Parking Lot', 1995, 'Antioch', 'https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/listing1image.jpg?toke[…]4MTYzMn0.h4TJ0R_-RQF4hWwPXujPxCeGjvA4_bMxfmUSdiCJNy0' , 1, 3)
INSERT INTO Listing ([Address], Squarefoot, Rent, Details, YearBuilt, City, ImgURL, AgentId, UserId) VALUES ('5833 Main Street Nashville, TN', 80000, 80000, 'Parking Garage, Rooftop Access', 2013, 'Nashville', 'https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/listing2image.jpg?toke[…]4MTY1Mn0.2efzFJyNW0BBUmM4eSVp1ZbJKgkqOyUqd-WeRfL0s0s' , 2, 1)
INSERT INTO Listing ([Address], Squarefoot, Rent, Details, YearBuilt, City, ImgURL, AgentId, UserId) VALUES ('294 Western Ave Franklin, TN', 8000, 80000, 'Store front, 1 Story', 2003, 'Franklin', 'https://images1.loopnet.com/i2/o7xywzbrC82huzXMdN62DiYLFRUN1BUeRsOLcIZqEQ8/1/multifamily-property-for-sale-5918-saint-antoine-st-detroit-mi-48202.jpg' , 3, 3)
INSERT INTO Listing ([Address], Squarefoot, Rent, Details, YearBuilt, City, ImgURL, AgentId, UserId) VALUES ('4562 Nation Way', 4000, 4000, 'Corner Lot, Office Space', 1967, 'Nashville', 'https://bhhscaliber.com/wp-content/uploads/2015/04/commercial-building.jpg' , 4, 4)

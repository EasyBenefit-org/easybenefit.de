BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[AffiliateNetwork] (
    [AffiliateNetworkID] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(250) NOT NULL,
    [ActiveFrom] DATETIME2 NOT NULL,
    [ActiveTo] DATETIME2,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__AffiliateNet__CD__00EA0E6F] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__AffiliateNet__CU__01DE32A8] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_AffiliateNetwork] PRIMARY KEY ([AffiliateNetworkID])
);

-- CreateTable
CREATE TABLE [dbo].[AffiliateProgram] (
    [AffiliateProgramID] INT NOT NULL IDENTITY(1,1),
    [AffiliateNetworkID] INT NOT NULL,
    [AffiliateProgramTypeID] INT NOT NULL,
    [Title] NVARCHAR(250) NOT NULL,
    [ForeignID] INT,
    [CommissionFrom] DECIMAL(18,0),
    [CommissionTo] DECIMAL(18,0),
    [CommissionUnit] NVARCHAR(30),
    [AffiliateURL] NVARCHAR(300) NOT NULL,
    [ActiveFrom] DATETIME2 NOT NULL,
    [ActiveTo] DATETIME2,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__AffiliatePro__CD__13FCE2E3] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__AffiliatePro__CU__14F1071C] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_AffiliateProgram] PRIMARY KEY ([AffiliateProgramID]),
    CONSTRAINT [IX_AffiliateProgram] UNIQUE ([AffiliateProgramID],[AffiliateNetworkID],[AffiliateProgramTypeID])
);

-- CreateTable
CREATE TABLE [dbo].[AffiliateProgramLogo] (
    [AffiliateProgramLogoID] INT NOT NULL IDENTITY(1,1),
    [AffiliateProgramID] INT NOT NULL,
    [Filename] NVARCHAR(250) NOT NULL,
    [Title] NVARCHAR(250) NOT NULL,
    [Alt] NVARCHAR(250) NOT NULL,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__AffiliatePro__CD__1B9E04AB] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__AffiliatePro__CU__1C9228E4] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_AffiliateProgramLogo] PRIMARY KEY ([AffiliateProgramLogoID])
);

-- CreateTable
CREATE TABLE [dbo].[AffiliateProgramType] (
    [AffiliateProgramTypeID] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(250) NOT NULL,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__AffiliatePro__CD__17CD73C7] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__AffiliatePro__CU__18C19800] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_AffiliateProgramType] PRIMARY KEY ([AffiliateProgramTypeID])
);

-- CreateTable
CREATE TABLE [dbo].[AffiliateTransaction] (
    [AffiliateTransactionID] INT NOT NULL IDENTITY(1,1),
    [AffiliateTransactionStatusID] INT NOT NULL,
    [AffiliateProgramID] INT NOT NULL,
    [DonationCategoryID] INT NOT NULL,
    [CurrencyID] INT NOT NULL,
    [CommissionAmount] DECIMAL(18,0) NOT NULL,
    [AffiliateTransactionDate] DATETIME2 NOT NULL,
    [ValidationDate] DATETIME2,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__AffiliateTra__CD__0C5BC11B] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__AffiliateTra__CU__0D4FE554] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_AffiliateTransaction] PRIMARY KEY ([AffiliateTransactionID]),
    CONSTRAINT [IX_AffiliateTransaction] UNIQUE ([AffiliateTransactionStatusID],[AffiliateProgramID],[DonationCategoryID],[CurrencyID])
);

-- CreateTable
CREATE TABLE [dbo].[AffiliateTransactionStatus] (
    [AffiliateTransactionStatusID] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(250) NOT NULL,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__AffiliateTra__CD__102C51FF] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__AffiliateTra__CU__11207638] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_AffiliateTransactionStatus] PRIMARY KEY ([AffiliateTransactionStatusID])
);

-- CreateTable
CREATE TABLE [dbo].[Contact] (
    [ContactID] INT NOT NULL IDENTITY(1,1),
    [Firstname] NVARCHAR(250) NOT NULL,
    [Surname] NVARCHAR(250) NOT NULL,
    [Mail] NVARCHAR(250) NOT NULL,
    [Phone] NVARCHAR(250) NOT NULL,
    [Street] NVARCHAR(250) NOT NULL,
    [Housenumber] NVARCHAR(250) NOT NULL,
    [ZIP] NVARCHAR(250) NOT NULL,
    [Place] NVARCHAR(250) NOT NULL,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__Contact__CD__75785BC3] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__Contact__CU__766C7FFC] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_Contact] PRIMARY KEY ([ContactID])
);

-- CreateTable
CREATE TABLE [dbo].[Currency] (
    [CurrencyID] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(250) NOT NULL,
    [Code] NVARCHAR(3) NOT NULL,
    [Symbol] NVARCHAR(250) NOT NULL,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__Currency__CD__04BA9F53] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__Currency__CU__05AEC38C] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_Currency] PRIMARY KEY ([CurrencyID])
);

-- CreateTable
CREATE TABLE [dbo].[DonationCategory] (
    [DonationCategoryID] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(250) NOT NULL,
    [ActiveFrom] DATETIME2 NOT NULL,
    [ActiveTo] DATETIME2,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__DonationCate__CD__7948ECA7] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__DonationCate__CU__7A3D10E0] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_DonationCategory] PRIMARY KEY ([DonationCategoryID])
);

-- CreateTable
CREATE TABLE [dbo].[DonationCategoryTrackingCode] (
    [DonationCategoryTrackingCodeID] INT NOT NULL IDENTITY(1,1),
    [DonationCategoryID] INT NOT NULL,
    [AffiliateNetworkID] INT NOT NULL,
    [Code] NVARCHAR(250) NOT NULL,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__DonationCate__CD__7D197D8B] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__DonationCate__CU__7E0DA1C4] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_DonationCategoryTrackingCode] PRIMARY KEY ([DonationCategoryTrackingCodeID]),
    CONSTRAINT [IX_DonationCategoryTrackingCode] UNIQUE ([DonationCategoryTrackingCodeID],[DonationCategoryID],[AffiliateNetworkID])
);

-- CreateTable
CREATE TABLE [dbo].[DonationPercentageTimespan] (
    [DonationPercentageTimespanID] INT NOT NULL IDENTITY(1,1),
    [Percentage] DECIMAL(18,0) NOT NULL,
    [ActiveFrom] DATETIME2 NOT NULL,
    [ActiveTo] DATETIME2,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__DonationPerc__CD__088B3037] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__DonationPerc__CU__097F5470] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_DonationPercentageTimespan] PRIMARY KEY ([DonationPercentageTimespanID])
);

-- CreateTable
CREATE TABLE [dbo].[Organisation] (
    [OrganisationID] INT NOT NULL IDENTITY(1,1),
    [ContactID] INT NOT NULL,
    [Name] NVARCHAR(250) NOT NULL,
    [Alias] NVARCHAR(250) NOT NULL,
    [Date] DATETIME2 NOT NULL,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__Organisation__CD__6DD739FB] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__Organisation__CU__6ECB5E34] DEFAULT 'SYSADMIN',
    CONSTRAINT [PK_Organisation] PRIMARY KEY ([OrganisationID])
);

-- CreateTable
CREATE TABLE [dbo].[Project] (
    [ProjectID] INT NOT NULL IDENTITY(1,1),
    [OrganisationID] INT NOT NULL,
    [DonationCategoryID] INT NOT NULL,
    [Name] NVARCHAR(250) NOT NULL,
    [Slug] NVARCHAR(50) NOT NULL,
    [AmountTarget] DECIMAL(18,0) NOT NULL,
    [AmountCurrent] DECIMAL(18,0) NOT NULL,
    [ActiveFrom] DATETIME2,
    [ActiveTo] DATETIME2,
    [CD] DATETIME2 NOT NULL CONSTRAINT [DF__Project__CD__71A7CADF] DEFAULT sysdatetime(),
    [CU] NVARCHAR(250) NOT NULL CONSTRAINT [DF__Project__CU__729BEF18] DEFAULT 'SYSADMIN',
    [Description] NVARCHAR(1000) NOT NULL CONSTRAINT [Project_Description_df] DEFAULT 'Eine kurze Projektbeschreibung: Was wollt ihr umsetzen? Wem helft ihr damit? Wie lange wird es dauern?',
    [ImageURL] NVARCHAR(200) NOT NULL CONSTRAINT [Project_ImageURL_df] DEFAULT '/img/project-titleImage-default.jpg',
    CONSTRAINT [PK_Project] PRIMARY KEY ([ProjectID]),
    CONSTRAINT [IX_Project] UNIQUE ([ProjectID],[OrganisationID],[DonationCategoryID])
);

-- AddForeignKey
ALTER TABLE [dbo].[AffiliateProgram] ADD CONSTRAINT [FK_AffiliateProgram_AffiliateNetworkID] FOREIGN KEY ([AffiliateNetworkID]) REFERENCES [dbo].[AffiliateNetwork]([AffiliateNetworkID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AffiliateProgram] ADD CONSTRAINT [FK_AffiliateProgram_AffiliateProgramTypeID] FOREIGN KEY ([AffiliateProgramTypeID]) REFERENCES [dbo].[AffiliateProgramType]([AffiliateProgramTypeID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AffiliateProgramLogo] ADD CONSTRAINT [FK_AffiliateProgramLogo_AffiliateProgramID] FOREIGN KEY ([AffiliateProgramID]) REFERENCES [dbo].[AffiliateProgram]([AffiliateProgramID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AffiliateTransaction] ADD CONSTRAINT [FK_AffiliateTransaction_AffiliateProgramID] FOREIGN KEY ([AffiliateProgramID]) REFERENCES [dbo].[AffiliateProgram]([AffiliateProgramID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AffiliateTransaction] ADD CONSTRAINT [FK_AffiliateTransaction_AffiliateTransactionStatusID] FOREIGN KEY ([AffiliateTransactionStatusID]) REFERENCES [dbo].[AffiliateTransactionStatus]([AffiliateTransactionStatusID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AffiliateTransaction] ADD CONSTRAINT [FK_AffiliateTransaction_CurrencyID] FOREIGN KEY ([CurrencyID]) REFERENCES [dbo].[Currency]([CurrencyID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AffiliateTransaction] ADD CONSTRAINT [FK_AffiliateTransaction_DonationCategoryID] FOREIGN KEY ([DonationCategoryID]) REFERENCES [dbo].[DonationCategory]([DonationCategoryID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DonationCategoryTrackingCode] ADD CONSTRAINT [FK_DonationCategoryTrackingCode_AffiliateNetworkID] FOREIGN KEY ([AffiliateNetworkID]) REFERENCES [dbo].[AffiliateNetwork]([AffiliateNetworkID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[DonationCategoryTrackingCode] ADD CONSTRAINT [FK_DonationCategoryTrackingCode_AffiliateProgramID] FOREIGN KEY ([DonationCategoryID]) REFERENCES [dbo].[DonationCategory]([DonationCategoryID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Organisation] ADD CONSTRAINT [FK_Organisation_ContactID] FOREIGN KEY ([ContactID]) REFERENCES [dbo].[Contact]([ContactID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Project] ADD CONSTRAINT [FK_Project_DonationCategoryID] FOREIGN KEY ([DonationCategoryID]) REFERENCES [dbo].[DonationCategory]([DonationCategoryID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Project] ADD CONSTRAINT [FK_Project_OrganisationID] FOREIGN KEY ([OrganisationID]) REFERENCES [dbo].[Organisation]([OrganisationID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

export const vComptrollerAbi = [
	{
		inputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'action',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'pauseState',
				type: 'bool',
			},
		],
		name: 'ActionPaused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'action',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'pauseState',
				type: 'bool',
			},
		],
		name: 'ActionPaused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bool',
				name: 'state',
				type: 'bool',
			},
		],
		name: 'ActionProtocolPaused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'venusDelta',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'venusBorrowIndex',
				type: 'uint256',
			},
		],
		name: 'DistributedBorrowerVenus',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'supplier',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'venusDelta',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'venusSupplyIndex',
				type: 'uint256',
			},
		],
		name: 'DistributedSupplierVenus',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'error',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'info',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'detail',
				type: 'uint256',
			},
		],
		name: 'Failure',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'MarketEntered',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'MarketExited',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
		],
		name: 'MarketListed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'isVenus',
				type: 'bool',
			},
		],
		name: 'MarketVenus',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldCloseFactorMantissa',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newCloseFactorMantissa',
				type: 'uint256',
			},
		],
		name: 'NewCloseFactor',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldCollateralFactorMantissa',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newCollateralFactorMantissa',
				type: 'uint256',
			},
		],
		name: 'NewCollateralFactor',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldLiquidationIncentiveMantissa',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newLiquidationIncentiveMantissa',
				type: 'uint256',
			},
		],
		name: 'NewLiquidationIncentive',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldMaxAssets',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newMaxAssets',
				type: 'uint256',
			},
		],
		name: 'NewMaxAssets',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldPauseGuardian',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newPauseGuardian',
				type: 'address',
			},
		],
		name: 'NewPauseGuardian',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract PriceOracle',
				name: 'oldPriceOracle',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract PriceOracle',
				name: 'newPriceOracle',
				type: 'address',
			},
		],
		name: 'NewPriceOracle',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract VAIControllerInterface',
				name: 'oldVAIController',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract VAIControllerInterface',
				name: 'newVAIController',
				type: 'address',
			},
		],
		name: 'NewVAIController',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldVAIMintRate',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newVAIMintRate',
				type: 'uint256',
			},
		],
		name: 'NewVAIMintRate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldVenusRate',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newVenusRate',
				type: 'uint256',
			},
		],
		name: 'NewVenusRate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newSpeed',
				type: 'uint256',
			},
		],
		name: 'VenusSpeedUpdated',
		type: 'event',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: 'vTokens',
				type: 'address[]',
			},
		],
		name: '_addVenusMarkets',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract Unitroller',
				name: 'unitroller',
				type: 'address',
			},
		],
		name: '_become',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: '_borrowGuardianPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
		],
		name: '_dropVenusMarket',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: '_mintGuardianPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'newCloseFactorMantissa',
				type: 'uint256',
			},
		],
		name: '_setCloseFactor',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'newCollateralFactorMantissa',
				type: 'uint256',
			},
		],
		name: '_setCollateralFactor',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'newLiquidationIncentiveMantissa',
				type: 'uint256',
			},
		],
		name: '_setLiquidationIncentive',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'newMaxAssets',
				type: 'uint256',
			},
		],
		name: '_setMaxAssets',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'newPauseGuardian',
				type: 'address',
			},
		],
		name: '_setPauseGuardian',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract PriceOracle',
				name: 'newOracle',
				type: 'address',
			},
		],
		name: '_setPriceOracle',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'bool',
				name: 'state',
				type: 'bool',
			},
		],
		name: '_setProtocolPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract VAIControllerInterface',
				name: 'vaiController_',
				type: 'address',
			},
		],
		name: '_setVAIController',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'newVAIMintRate',
				type: 'uint256',
			},
		],
		name: '_setVAIMintRate',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'venusRate_',
				type: 'uint256',
			},
		],
		name: '_setVenusRate',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
		],
		name: '_supportMarket',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'accountAssets',
		outputs: [
			{
				internalType: 'contract VToken',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'admin',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'allMarkets',
		outputs: [
			{
				internalType: 'contract VToken',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'borrowAmount',
				type: 'uint256',
			},
		],
		name: 'borrowAllowed',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'borrowGuardianPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'borrowAmount',
				type: 'uint256',
			},
		],
		name: 'borrowVerify',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'contract VToken',
				name: 'vToken',
				type: 'address',
			},
		],
		name: 'checkMembership',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'holder',
				type: 'address',
			},
			{
				internalType: 'contract VToken[]',
				name: 'vTokens',
				type: 'address[]',
			},
		],
		name: 'claimVenus',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'holder',
				type: 'address',
			},
		],
		name: 'claimVenus',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: 'holders',
				type: 'address[]',
			},
			{
				internalType: 'contract VToken[]',
				name: 'vTokens',
				type: 'address[]',
			},
			{
				internalType: 'bool',
				name: 'borrowers',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'suppliers',
				type: 'bool',
			},
		],
		name: 'claimVenus',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'closeFactorMantissa',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'comptrollerImplementation',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: 'vTokens',
				type: 'address[]',
			},
		],
		name: 'enterMarkets',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vTokenAddress',
				type: 'address',
			},
		],
		name: 'exitMarket',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'getAccountLiquidity',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getAllMarkets',
		outputs: [
			{
				internalType: 'contract VToken[]',
				name: '',
				type: 'address[]',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'getAssetsIn',
		outputs: [
			{
				internalType: 'contract VToken[]',
				name: '',
				type: 'address[]',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getBlockNumber',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'vTokenModify',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'redeemTokens',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'borrowAmount',
				type: 'uint256',
			},
		],
		name: 'getHypotheticalAccountLiquidity',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'minter',
				type: 'address',
			},
		],
		name: 'getMintableVAI',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getVAIMintRate',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getXVSAddress',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'isComptroller',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vTokenBorrowed',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'vTokenCollateral',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'liquidator',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
		],
		name: 'liquidateBorrowAllowed',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vTokenBorrowed',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'vTokenCollateral',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'liquidator',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'actualRepayAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'seizeTokens',
				type: 'uint256',
			},
		],
		name: 'liquidateBorrowVerify',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'vTokenBorrowed',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'vTokenCollateral',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'actualRepayAmount',
				type: 'uint256',
			},
		],
		name: 'liquidateCalculateSeizeTokens',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'liquidationIncentiveMantissa',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'markets',
		outputs: [
			{
				internalType: 'bool',
				name: 'isListed',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'collateralFactorMantissa',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'isVenus',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'maxAssets',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'minter',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'mintAmount',
				type: 'uint256',
			},
		],
		name: 'mintAllowed',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'mintGuardianPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'mintVAIAmount',
				type: 'uint256',
			},
		],
		name: 'mintVAI',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'mintVAIGuardianPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'minter',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'actualMintAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'mintTokens',
				type: 'uint256',
			},
		],
		name: 'mintVerify',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'mintedVAIOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'mintedVAIs',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'oracle',
		outputs: [
			{
				internalType: 'contract PriceOracle',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'pauseGuardian',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'pendingAdmin',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'pendingComptrollerImplementation',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'protocolPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'redeemer',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'redeemTokens',
				type: 'uint256',
			},
		],
		name: 'redeemAllowed',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'redeemer',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'redeemAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'redeemTokens',
				type: 'uint256',
			},
		],
		name: 'redeemVerify',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'refreshVenusSpeeds',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'payer',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
		],
		name: 'repayBorrowAllowed',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'payer',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'actualRepayAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'borrowerIndex',
				type: 'uint256',
			},
		],
		name: 'repayBorrowVerify',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: 'repayVAIAmount',
				type: 'uint256',
			},
		],
		name: 'repayVAI',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'repayVAIGuardianPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vTokenCollateral',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'vTokenBorrowed',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'liquidator',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'seizeTokens',
				type: 'uint256',
			},
		],
		name: 'seizeAllowed',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'seizeGuardianPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vTokenCollateral',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'vTokenBorrowed',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'liquidator',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'seizeTokens',
				type: 'uint256',
			},
		],
		name: 'seizeVerify',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'setMintedVAIOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'src',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'dst',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'transferTokens',
				type: 'uint256',
			},
		],
		name: 'transferAllowed',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'transferGuardianPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'vToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'src',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'dst',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'transferTokens',
				type: 'uint256',
			},
		],
		name: 'transferVerify',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'vaiController',
		outputs: [
			{
				internalType: 'contract VAIControllerInterface',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'vaiMintRate',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'venusAccrued',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'venusBorrowState',
		outputs: [
			{
				internalType: 'uint224',
				name: 'index',
				type: 'uint224',
			},
			{
				internalType: 'uint32',
				name: 'block',
				type: 'uint32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'venusBorrowerIndex',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'venusClaimThreshold',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'venusInitialIndex',
		outputs: [
			{
				internalType: 'uint224',
				name: '',
				type: 'uint224',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'venusRate',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'venusSpeeds',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'venusSupplierIndex',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'venusSupplyState',
		outputs: [
			{
				internalType: 'uint224',
				name: 'index',
				type: 'uint224',
			},
			{
				internalType: 'uint32',
				name: 'block',
				type: 'uint32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
];

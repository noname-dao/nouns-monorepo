/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NounsDescriptor } from "./NounsDescriptor";

export class NounsDescriptorFactory extends ContractFactory {
  constructor(
    linkLibraryAddresses: NounsDescriptorLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      NounsDescriptorFactory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: NounsDescriptorLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$e1d8844a0810dc0e87a665b1f2b5fa7c69\\$__", "g"),
      linkLibraryAddresses["__$e1d8844a0810dc0e87a665b1f2b5fa7c69$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(overrides?: Overrides): Promise<NounsDescriptor> {
    return super.deploy(overrides || {}) as Promise<NounsDescriptor>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NounsDescriptor {
    return super.attach(address) as NounsDescriptor;
  }
  connect(signer: Signer): NounsDescriptorFactory {
    return super.connect(signer) as NounsDescriptorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsDescriptor {
    return new Contract(address, _abi, signerOrProvider) as NounsDescriptor;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
    ],
    name: "BaseURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "DataURIToggled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "PartsLocked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accessories",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accessoryCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_accessory",
        type: "bytes",
      },
    ],
    name: "addAccessory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_background",
        type: "bytes",
      },
    ],
    name: "addBackground",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_body",
        type: "bytes",
      },
    ],
    name: "addBody",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_paletteIndex",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_color",
        type: "string",
      },
    ],
    name: "addColorToPalette",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_face",
        type: "bytes",
      },
    ],
    name: "addFace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_accessories",
        type: "bytes[]",
      },
    ],
    name: "addManyAccessories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_backgrounds",
        type: "bytes[]",
      },
    ],
    name: "addManyBackgrounds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_bodies",
        type: "bytes[]",
      },
    ],
    name: "addManyBodies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "paletteIndex",
        type: "uint8",
      },
      {
        internalType: "string[]",
        name: "newColors",
        type: "string[]",
      },
    ],
    name: "addManyColorsToPalette",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_faces",
        type: "bytes[]",
      },
    ],
    name: "addManyFaces",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_tails",
        type: "bytes[]",
      },
    ],
    name: "addManyTails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_tail",
        type: "bytes",
      },
    ],
    name: "addTail",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "arePartsLocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "backgroundCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "backgrounds",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bodies",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bodyCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "face",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "tail",
            type: "uint48",
          },
        ],
        internalType: "struct INounsSeeder.Seed",
        name: "seed",
        type: "tuple",
      },
    ],
    name: "dataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "faceCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "faces",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "face",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "tail",
            type: "uint48",
          },
        ],
        internalType: "struct INounsSeeder.Seed",
        name: "seed",
        type: "tuple",
      },
    ],
    name: "generateSVGImage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "face",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "tail",
            type: "uint48",
          },
        ],
        internalType: "struct INounsSeeder.Seed",
        name: "seed",
        type: "tuple",
      },
    ],
    name: "genericDataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isDataURIEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockParts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "palettes",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tailCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tails",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleDataURIEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "face",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "tail",
            type: "uint48",
          },
        ],
        internalType: "struct INounsSeeder.Seed",
        name: "seed",
        type: "tuple",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff60a81b1916600160a81b17905534801561002357600080fd5b5061002d33610032565b610082565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612bf280620000926000396000f3fe608060405234801561001057600080fd5b506004361061025c5760003560e01c8063715018a611610145578063ba131b30116100bd578063eba818061161008c578063f063dcdc11610071578063f063dcdc146104dd578063f2fde38b146104f0578063f9da88631461050357600080fd5b8063eba81806146104cd578063ec212903146104d557600080fd5b8063ba131b3014610484578063ce2f4f531461048c578063da7de207146104b2578063dfe8478b146104c557600080fd5b8063839644da116101145780638a85a1e8116100f95780638a85a1e8146104365780638da5cb5b14610449578063a30ce3c01461047157600080fd5b8063839644da1461041057806387db11bd1461042357600080fd5b8063715018a6146103ad57806371cde580146103b5578063773b9771146103c85780637ca94210146103fd57600080fd5b80633cfdafd3116101d857806355f804b3116101a7578063631ecabd1161018c578063631ecabd1461037f578063638ac270146103925780636c0360eb146103a557600080fd5b806355f804b314610359578063598fa9da1461036c57600080fd5b80633cfdafd31461031957806344cee73c1461032c5780634531c0a81461033f5780634daebac21461035157600080fd5b80630ba99e221161022f5780632715c90e116102145780632715c90e146102eb5780632a1d0769146102fe5780632ea043001461030657600080fd5b80630ba99e22146102c557806317b552ab146102d857600080fd5b806303f61f55146102615780630475d8631461027657806304bde4dd14610289578063097da7ce146102b2575b600080fd5b61027461026f366004612395565b610516565b005b610274610284366004612353565b6105fb565b61029c6102973660046124ca565b61071b565b6040516102a991906127f6565b60405180910390f35b6102746102c0366004612353565b6107c7565b6102746102d3366004612395565b6108e2565b6102746102e6366004612395565b6109be565b6102746102f9366004612395565b610a9a565b610274610b76565b61029c6103143660046124ae565b610cb0565b61029c6103273660046124e3565b610d9d565b61029c61033a3660046124ca565b610e09565b6003545b6040519081526020016102a9565b600554610343565b610274610367366004612395565b610e19565b61029c61037a3660046125a9565b610eca565b61027461038d366004612353565b610f02565b61029c6103a03660046124e3565b61101d565b61029c611089565b610274611096565b61029c6103c33660046124ca565b611109565b6000546103ed9074010000000000000000000000000000000000000000900460ff1681565b60405190151581526020016102a9565b61029c61040b3660046124ca565b611119565b61027461041e366004612510565b611129565b61029c610431366004612439565b611276565b610274610444366004612353565b611371565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016102a9565b61027461047f366004612353565b61148c565b600654610343565b6000546103ed907501000000000000000000000000000000000000000000900460ff1681565b61029c6104c03660046124ca565b6115a7565b6102746115b7565b600454610343565b600754610343565b6102746104eb366004612395565b6116a1565b6102746104fe36600461231d565b61177d565b610274610511366004612563565b611879565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105825760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60005474010000000000000000000000000000000000000000900460ff16156105ed5760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b6105f78282611973565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106625760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60005474010000000000000000000000000000000000000000900460ff16156106cd5760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b60005b81811015610716576107048383838181106106ed576106ed612b5e565b90506020028101906106ff9190612932565b6119b0565b8061070e81612ab3565b9150506106d0565b505050565b6003818154811061072b57600080fd5b90600052602060002001600091509050805461074690612a5f565b80601f016020809104026020016040519081016040528092919081815260200182805461077290612a5f565b80156107bf5780601f10610794576101008083540402835291602001916107bf565b820191906000526020600020905b8154815290600101906020018083116107a257829003601f168201915b505050505081565b60005473ffffffffffffffffffffffffffffffffffffffff16331461082e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60005474010000000000000000000000000000000000000000900460ff16156108995760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b60005b81811015610716576108d08383838181106108b9576108b9612b5e565b90506020028101906108cb9190612932565b6119ed565b806108da81612ab3565b91505061089c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109495760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60005474010000000000000000000000000000000000000000900460ff16156109b45760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b6105f782826119ed565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a255760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60005474010000000000000000000000000000000000000000900460ff1615610a905760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b6105f782826119b0565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b015760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60005474010000000000000000000000000000000000000000900460ff1615610b6c5760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b6105f78282611a2a565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bdd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60005474010000000000000000000000000000000000000000900460ff1615610c485760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001781556040517f1680ee6d421f70ed6030d2fc4fcb50217a5dd617858d56562b119eca59172e579190a1565b606060006040518060400160405280610cc885611a67565b81526020016040518060400160405280600681526020017f6636663766390000000000000000000000000000000000000000000000000000815250815250905073__$e1d8844a0810dc0e87a665b1f2b5fa7c69$__6366b8c2418260026040518363ffffffff1660e01b8152600401610d42929190612838565b60006040518083038186803b158015610d5a57600080fd5b505af4158015610d6e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d9691908101906123cb565b9392505050565b6000546060907501000000000000000000000000000000000000000000900460ff1615610dd557610dce838361101d565b9050610e03565b6001610de084611eb0565b604051602001610df1929190612670565b60405160208183030381529060405290505b92915050565b6004818154811061072b57600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff163314610e805760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b610e8c600183836120c5565b507f6741b2fc379fad678116fe3d4d4b9a1a184ab53ba36b86ad0fa66340b1ab41ad8282604051610ebe929190612809565b60405180910390a15050565b60026020528160005260406000208181548110610ee657600080fd5b9060005260206000200160009150915050805461074690612a5f565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f695760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60005474010000000000000000000000000000000000000000900460ff1615610fd45760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b60005b818110156107165761100b838383818110610ff457610ff4612b5e565b90506020028101906110069190612932565b611fea565b8061101581612ab3565b915050610fd7565b6060600061102a84611eb0565b905060008160405160200161103f9190612745565b6040516020818303038152906040529050600082604051602001611063919061278a565b604051602081830303815290604052905061107f828287611276565b9695505050505050565b6001805461074690612a5f565b60005473ffffffffffffffffffffffffffffffffffffffff1633146110fd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b6111076000612027565b565b6007818154811061072b57600080fd5b6005818154811061072b57600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff1633146111905760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60ff8316600090815260026020526040902054610100906111b29083906129f0565b11156112265760405162461bcd60e51b815260206004820152602160248201527f50616c65747465732063616e206f6e6c7920686f6c642032353620636f6c6f7260448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610579565b60005b818110156112705761125e8484848481811061124757611247612b5e565b90506020028101906112599190612932565b61209c565b8061126881612ab3565b915050611229565b50505050565b60606000604051806080016040528086815260200185815260200161129a85611a67565b81526020016040518060400160405280600681526020017f6636663766390000000000000000000000000000000000000000000000000000815250815250905073__$e1d8844a0810dc0e87a665b1f2b5fa7c69$__63bf1deae28260026040518363ffffffff1660e01b815260040161131492919061289f565b60006040518083038186803b15801561132c57600080fd5b505af4158015611340573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261136891908101906123cb565b95945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146113d85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60005474010000000000000000000000000000000000000000900460ff16156114435760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b60005b818110156107165761147a83838381811061146357611463612b5e565b90506020028101906114759190612932565b611a2a565b8061148481612ab3565b915050611446565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114f35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60005474010000000000000000000000000000000000000000900460ff161561155e5760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b60005b818110156107165761159583838381811061157e5761157e612b5e565b90506020028101906115909190612932565b611973565b8061159f81612ab3565b915050611561565b6006818154811061072b57600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff16331461161e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b600080547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff811675010000000000000000000000000000000000000000009182900460ff1615918202179091556040518181527f360c3d72ee193226275b842f85231c259c934e85459fed80fa68e502ffa9dbde9060200160405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146117085760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60005474010000000000000000000000000000000000000000900460ff16156117735760405162461bcd60e51b815260206004820152601060248201527f506172747320617265206c6f636b6564000000000000000000000000000000006044820152606401610579565b6105f78282611fea565b60005473ffffffffffffffffffffffffffffffffffffffff1633146117e45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b73ffffffffffffffffffffffffffffffffffffffff811661186d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610579565b61187681612027565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146118e05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610579565b60ff83811660009081526002602052604090205411156119685760405162461bcd60e51b815260206004820152602160248201527f50616c65747465732063616e206f6e6c7920686f6c642032353620636f6c6f7260448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610579565b61071683838361209c565b60068054600181018255600091909152610716907ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0183836120c5565b60058054600181018255600091909152610716907f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00183836120c5565b60078054600181018255600091909152610716907fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880183836120c5565b60048054600181018255600091909152610716907f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0183836120c5565b60408051600580825260c0820190925260609160009190816020015b6060815260200190600190039081611a835790505090506003836000015165ffffffffffff1681548110611ab957611ab9612b5e565b906000526020600020018054611ace90612a5f565b80601f0160208091040260200160405190810160405280929190818152602001828054611afa90612a5f565b8015611b475780601f10611b1c57610100808354040283529160200191611b47565b820191906000526020600020905b815481529060010190602001808311611b2a57829003601f168201915b505050505081600081518110611b5f57611b5f612b5e565b60200260200101819052506004836020015165ffffffffffff1681548110611b8957611b89612b5e565b906000526020600020018054611b9e90612a5f565b80601f0160208091040260200160405190810160405280929190818152602001828054611bca90612a5f565b8015611c175780601f10611bec57610100808354040283529160200191611c17565b820191906000526020600020905b815481529060010190602001808311611bfa57829003601f168201915b505050505081600181518110611c2f57611c2f612b5e565b60200260200101819052506007836080015165ffffffffffff1681548110611c5957611c59612b5e565b906000526020600020018054611c6e90612a5f565b80601f0160208091040260200160405190810160405280929190818152602001828054611c9a90612a5f565b8015611ce75780601f10611cbc57610100808354040283529160200191611ce7565b820191906000526020600020905b815481529060010190602001808311611cca57829003601f168201915b505050505081600281518110611cff57611cff612b5e565b60200260200101819052506006836060015165ffffffffffff1681548110611d2957611d29612b5e565b906000526020600020018054611d3e90612a5f565b80601f0160208091040260200160405190810160405280929190818152602001828054611d6a90612a5f565b8015611db75780601f10611d8c57610100808354040283529160200191611db7565b820191906000526020600020905b815481529060010190602001808311611d9a57829003601f168201915b505050505081600381518110611dcf57611dcf612b5e565b60200260200101819052506005836040015165ffffffffffff1681548110611df957611df9612b5e565b906000526020600020018054611e0e90612a5f565b80601f0160208091040260200160405190810160405280929190818152602001828054611e3a90612a5f565b8015611e875780601f10611e5c57610100808354040283529160200191611e87565b820191906000526020600020905b815481529060010190602001808311611e6a57829003601f168201915b505050505081600481518110611e9f57611e9f612b5e565b602090810291909101015292915050565b606081611ef057505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611f1a5780611f0481612ab3565b9150611f139050600a83612a08565b9150611ef4565b60008167ffffffffffffffff811115611f3557611f35612b8d565b6040519080825280601f01601f191660200182016040528015611f5f576020820181803683370190505b5090505b8415611fe257611f74600183612a1c565b9150611f81600a86612aec565b611f8c9060306129f0565b60f81b818381518110611fa157611fa1612b5e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611fdb600a86612a08565b9450611f63565b949350505050565b60038054600181018255600091909152610716907fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0183836120c5565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60ff83166000908152600260209081526040822080546001810182559083529120611270910183835b8280546120d190612a5f565b90600052602060002090601f0160209004810192826120f35760008555612157565b82601f1061212a578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555612157565b82800160010185558215612157579182015b8281111561215757823582559160200191906001019061213c565b50612163929150612167565b5090565b5b808211156121635760008155600101612168565b60008083601f84011261218e57600080fd5b50813567ffffffffffffffff8111156121a657600080fd5b6020830191508360208260051b85010111156121c157600080fd5b9250929050565b60008083601f8401126121da57600080fd5b50813567ffffffffffffffff8111156121f257600080fd5b6020830191508360208285010111156121c157600080fd5b600082601f83011261221b57600080fd5b813561222e612229826129c8565b612997565b81815284602083860101111561224357600080fd5b816020850160208301376000918101602001919091529392505050565b600060a0828403121561227257600080fd5b60405160a0810181811067ffffffffffffffff8211171561229557612295612b8d565b6040529050806122a4836122f1565b81526122b2602084016122f1565b60208201526122c3604084016122f1565b60408201526122d4606084016122f1565b60608201526122e5608084016122f1565b60808201525092915050565b803565ffffffffffff8116811461230757600080fd5b919050565b803560ff8116811461230757600080fd5b60006020828403121561232f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610d9657600080fd5b6000806020838503121561236657600080fd5b823567ffffffffffffffff81111561237d57600080fd5b6123898582860161217c565b90969095509350505050565b600080602083850312156123a857600080fd5b823567ffffffffffffffff8111156123bf57600080fd5b612389858286016121c8565b6000602082840312156123dd57600080fd5b815167ffffffffffffffff8111156123f457600080fd5b8201601f8101841361240557600080fd5b8051612413612229826129c8565b81815285602083850101111561242857600080fd5b611368826020830160208601612a33565b600080600060e0848603121561244e57600080fd5b833567ffffffffffffffff8082111561246657600080fd5b6124728783880161220a565b9450602086013591508082111561248857600080fd5b506124958682870161220a565b9250506124a58560408601612260565b90509250925092565b600060a082840312156124c057600080fd5b610d968383612260565b6000602082840312156124dc57600080fd5b5035919050565b60008060c083850312156124f657600080fd5b823591506125078460208501612260565b90509250929050565b60008060006040848603121561252557600080fd5b61252e8461230c565b9250602084013567ffffffffffffffff81111561254a57600080fd5b6125568682870161217c565b9497909650939450505050565b60008060006040848603121561257857600080fd5b6125818461230c565b9250602084013567ffffffffffffffff81111561259d57600080fd5b612556868287016121c8565b600080604083850312156125bc57600080fd5b6125c58361230c565b946020939093013593505050565b600081518084526020808501808196508360051b8101915082860160005b8581101561261b578284038952612609848351612628565b988501989350908401906001016125f1565b5091979650505050505050565b60008151808452612640816020860160208601612a33565b601f01601f19169290920160200192915050565b60008151612666818560208601612a33565b9290920192915050565b600080845481600182811c91508083168061268c57607f831692505b60208084108214156126c5577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b8180156126d9576001811461270857612735565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528489019650612735565b60008b81526020902060005b8681101561272d5781548b820152908501908301612714565b505084890196505b5050505050506113688185612654565b7f4e6f6e616d65200000000000000000000000000000000000000000000000000081526000825161277d816007850160208701612a33565b9190910160070192915050565b7f4e6f6e616d6520000000000000000000000000000000000000000000000000008152600082516127c2816007850160208701612a33565b7f2069732061206d656d626572206f6620746865204e6f6e616d652044414f00006007939091019283015250602501919050565b602081526000610d966020830184612628565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b604081526000835160408084015261285360808401826125d3565b905060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc084830301606085015261288e8282612628565b925050508260208301529392505050565b6040815260008351608060408401526128bb60c0840182612628565b905060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0808584030160608601526128f78383612628565b9250604087015191508085840301608086015261291483836125d3565b925060608701519150808584030160a08601525061288e8282612628565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261296757600080fd5b83018035915067ffffffffffffffff82111561298257600080fd5b6020019150368190038213156121c157600080fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156129c0576129c0612b8d565b604052919050565b600067ffffffffffffffff8211156129e2576129e2612b8d565b50601f01601f191660200190565b60008219821115612a0357612a03612b00565b500190565b600082612a1757612a17612b2f565b500490565b600082821015612a2e57612a2e612b00565b500390565b60005b83811015612a4e578181015183820152602001612a36565b838111156112705750506000910152565b600181811c90821680612a7357607f821691505b60208210811415612aad577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612ae557612ae5612b00565b5060010190565b600082612afb57612afb612b2f565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220e3e736211e26a64bebcc0c1d51246ab7153a71ea8818ef6954a03f579c75209564736f6c63430008060033";

export interface NounsDescriptorLibraryAddresses {
  ["__$e1d8844a0810dc0e87a665b1f2b5fa7c69$__"]: string;
}

export class product {


        id!: number;
        title!: string;
        description!: string;
        category!: string;
        price!: number;
        discountPercentage!: number;
        rating!: number;
        stock!: number;
        tags!: string[];
        brand!: string;
        sku!: string;
        weight!: number;
        dimensions!: dimensions;
        warrantyInformation!: string;
        shippingInformation!: string;
        availabilityStatus!: string;
        reviews!: reviews[];
        returnPolicy!: string;
        minimumOrderQuantity!: number;
        meta!: meta;
        images!: string[];
        thumbnail!: string;
}
      



export class meta {
        createdAt!: string;
        updatedAt!: string;
        barcode!: string;
        qrCode!: string;
  }


  export class reviews{
        rating!: number;
        comment!: string;
        date!: string;
        reviewerName!: string;
        reviewerEmail!: string;
  }

  export class dimensions{
        width!: number;
        height!: number;
        depth!: number;
  }
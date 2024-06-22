/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SubscriptionWhereUniqueInput } from "../../subscription/base/SubscriptionWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumSignalTypeField } from "./EnumSignalTypeField";

@InputType()
class SignalUpdateInput {
  @ApiProperty({
    required: false,
    type: () => SubscriptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionWhereUniqueInput)
  @IsOptional()
  @Field(() => SubscriptionWhereUniqueInput, {
    nullable: true,
  })
  subscription?: SubscriptionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumSignalTypeField,
  })
  @IsEnum(EnumSignalTypeField)
  @IsOptional()
  @Field(() => EnumSignalTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { SignalUpdateInput as SignalUpdateInput };

import { Module } from "@nestjs/common";
import { CustomerModule } from "src/cases/customers/customer.module";
import { SupabaseModule } from "src/lib/supabase.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [SupabaseModule, CustomerModule],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}


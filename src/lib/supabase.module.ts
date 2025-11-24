import { Module } from "@nestjs/common";
import { SupabaseService } from "./supabase.service";

@Module({
    imports: [SupabaseService],
    exports: [SupabaseService],
})
export class SupabaseModule {}
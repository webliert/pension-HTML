/**
 * Supabase 数据库类型定义
 * 此文件与 supabase/schema.sql 保持手工同步
 * 兼容 supabase-js v2.45+
 */

export type ReservationStatus = 'pending' | 'contacted' | 'visited' | 'cancelled'

export interface ReservationRow {
  id: string
  name: string
  phone: string
  elder_age: number
  visit_time: string
  notes: string | null
  status: ReservationStatus
  created_at: string
  updated_at: string
}

type Database = {
  __InternalSupabase: {
    PostgrestVersion: '12'
  }
  public: {
    Tables: {
      reservations: {
        Row: ReservationRow
        Insert: {
          name: string
          phone: string
          elder_age: number
          visit_time: string
          notes?: string | null
          status?: ReservationStatus
        }
        Update: {
          status?: ReservationStatus
          notes?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type { Database }
export type ReservationInsert = Database['public']['Tables']['reservations']['Insert']
export type ReservationUpdate = Database['public']['Tables']['reservations']['Update']
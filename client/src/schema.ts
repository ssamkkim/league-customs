export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      matches: {
        Row: {
          id: number;
          data: Json | null;
        };
        Insert: {
          id?: number;
          data?: Json | null;
        };
        Update: {
          id?: number;
          data?: Json | null;
        };
      };
      players: {
        Row: {
          id: number;
          rank: number | null;
          name: string | null;
          games_won: number | null;
          games_played: number | null;
        };
        Insert: {
          id?: number;
          rank?: number | null;
          name?: string | null;
          games_won?: number | null;
          games_played?: number | null;
        };
        Update: {
          id?: number;
          rank?: number | null;
          name?: string | null;
          games_won?: number | null;
          games_played?: number | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

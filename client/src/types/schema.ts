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
          data: Json;
        };
        Insert: {
          id?: number;
          data: Json;
        };
        Update: {
          id?: number;
          data?: Json;
        };
      };
      players: {
        Row: {
          id: number;
          rank: number;
          name: string;
          games_won: number;
          games_played: number;
        };
        Insert: {
          id?: number;
          rank: number;
          name: string;
          games_won: number;
          games_played: number;
        };
        Update: {
          id?: number;
          rank?: number;
          name?: string;
          games_won?: number;
          games_played?: number;
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

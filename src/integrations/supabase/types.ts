export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          badge_color: string
          business_id: string
          category: string
          created_at: string
          description: string
          icon: string
          id: string
          is_active: boolean
          is_hidden: boolean
          name: string
          points: number
          rarity: string
          requirement_type: string
          requirement_value: number
          reward_type: string | null
          reward_value: string | null
          type: string
          updated_at: string
        }
        Insert: {
          badge_color?: string
          business_id: string
          category: string
          created_at?: string
          description: string
          icon: string
          id?: string
          is_active?: boolean
          is_hidden?: boolean
          name: string
          points?: number
          rarity?: string
          requirement_type: string
          requirement_value: number
          reward_type?: string | null
          reward_value?: string | null
          type: string
          updated_at?: string
        }
        Update: {
          badge_color?: string
          business_id?: string
          category?: string
          created_at?: string
          description?: string
          icon?: string
          id?: string
          is_active?: boolean
          is_hidden?: boolean
          name?: string
          points?: number
          rarity?: string
          requirement_type?: string
          requirement_value?: number
          reward_type?: string | null
          reward_value?: string | null
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      affiliate_earnings: {
        Row: {
          business_subscription_amount_cents: number
          commission_amount_cents: number
          commission_rate: number
          created_at: string
          id: string
          month_year: string
          payment_status: string
          referral_id: string
          referred_business_id: string
          referrer_customer_id: string
          updated_at: string
        }
        Insert: {
          business_subscription_amount_cents: number
          commission_amount_cents: number
          commission_rate?: number
          created_at?: string
          id?: string
          month_year: string
          payment_status?: string
          referral_id: string
          referred_business_id: string
          referrer_customer_id: string
          updated_at?: string
        }
        Update: {
          business_subscription_amount_cents?: number
          commission_amount_cents?: number
          commission_rate?: number
          created_at?: string
          id?: string
          month_year?: string
          payment_status?: string
          referral_id?: string
          referred_business_id?: string
          referrer_customer_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_earnings_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "business_referrals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_earnings_referred_business_id_fkey"
            columns: ["referred_business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      affiliate_payouts: {
        Row: {
          created_at: string
          earnings_ids: string[]
          id: string
          payout_date: string
          payout_method: string
          referrer_customer_id: string
          status: string
          stripe_transfer_id: string | null
          total_amount_cents: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          earnings_ids: string[]
          id?: string
          payout_date?: string
          payout_method?: string
          referrer_customer_id: string
          status?: string
          stripe_transfer_id?: string | null
          total_amount_cents: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          earnings_ids?: string[]
          id?: string
          payout_date?: string
          payout_method?: string
          referrer_customer_id?: string
          status?: string
          stripe_transfer_id?: string | null
          total_amount_cents?: number
          updated_at?: string
        }
        Relationships: []
      }
      ai_recommendations: {
        Row: {
          business_id: string
          confidence_score: number
          created_at: string
          data_source: Json
          description: string
          expected_impact: string | null
          expires_at: string | null
          id: string
          implementation_difficulty: string | null
          implemented_at: string | null
          is_implemented: boolean
          priority: string
          recommendation_type: string
          suggested_actions: Json
          title: string
          updated_at: string
        }
        Insert: {
          business_id: string
          confidence_score?: number
          created_at?: string
          data_source?: Json
          description: string
          expected_impact?: string | null
          expires_at?: string | null
          id?: string
          implementation_difficulty?: string | null
          implemented_at?: string | null
          is_implemented?: boolean
          priority?: string
          recommendation_type: string
          suggested_actions?: Json
          title: string
          updated_at?: string
        }
        Update: {
          business_id?: string
          confidence_score?: number
          created_at?: string
          data_source?: Json
          description?: string
          expected_impact?: string | null
          expires_at?: string | null
          id?: string
          implementation_difficulty?: string | null
          implemented_at?: string | null
          is_implemented?: boolean
          priority?: string
          recommendation_type?: string
          suggested_actions?: Json
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      application_health: {
        Row: {
          additional_info: Json | null
          check_name: string
          checked_at: string
          error_message: string | null
          id: string
          response_time_ms: number | null
          status: string
        }
        Insert: {
          additional_info?: Json | null
          check_name: string
          checked_at?: string
          error_message?: string | null
          id?: string
          response_time_ms?: number | null
          status: string
        }
        Update: {
          additional_info?: Json | null
          check_name?: string
          checked_at?: string
          error_message?: string | null
          id?: string
          response_time_ms?: number | null
          status?: string
        }
        Relationships: []
      }
      business_location_usage: {
        Row: {
          additional_locations: number | null
          business_id: string | null
          created_at: string | null
          id: string
          monthly_cost_cents: number | null
          updated_at: string | null
        }
        Insert: {
          additional_locations?: number | null
          business_id?: string | null
          created_at?: string | null
          id?: string
          monthly_cost_cents?: number | null
          updated_at?: string | null
        }
        Update: {
          additional_locations?: number | null
          business_id?: string | null
          created_at?: string | null
          id?: string
          monthly_cost_cents?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_location_usage_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      business_locations: {
        Row: {
          address: string | null
          business_id: string
          created_at: string
          email: string | null
          geofence_radius_meters: number | null
          id: string
          is_active: boolean
          is_primary: boolean
          latitude: number | null
          longitude: number | null
          name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          business_id: string
          created_at?: string
          email?: string | null
          geofence_radius_meters?: number | null
          id?: string
          is_active?: boolean
          is_primary?: boolean
          latitude?: number | null
          longitude?: number | null
          name: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          business_id?: string
          created_at?: string
          email?: string | null
          geofence_radius_meters?: number | null
          id?: string
          is_active?: boolean
          is_primary?: boolean
          latitude?: number | null
          longitude?: number | null
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_locations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      business_owner_email_automation: {
        Row: {
          business_id: string
          created_at: string
          email_type: string
          id: string
          metadata: Json | null
          scheduled_for: string | null
          sent_at: string
          status: string
        }
        Insert: {
          business_id: string
          created_at?: string
          email_type: string
          id?: string
          metadata?: Json | null
          scheduled_for?: string | null
          sent_at?: string
          status?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          email_type?: string
          id?: string
          metadata?: Json | null
          scheduled_for?: string | null
          sent_at?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_owner_email_automation_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      business_referrals: {
        Row: {
          activation_date: string | null
          created_at: string
          id: string
          referral_code: string
          referred_at: string
          referred_business_id: string
          referrer_customer_id: string
          status: string
          updated_at: string
        }
        Insert: {
          activation_date?: string | null
          created_at?: string
          id?: string
          referral_code: string
          referred_at?: string
          referred_business_id: string
          referrer_customer_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          activation_date?: string | null
          created_at?: string
          id?: string
          referral_code?: string
          referred_at?: string
          referred_business_id?: string
          referrer_customer_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_referrals_referred_business_id_fkey"
            columns: ["referred_business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      business_reward_configs: {
        Row: {
          business_id: string
          created_at: string
          id: string
          is_active: boolean
          probability_weight: number
          reward_description: string | null
          reward_name: string
          reward_type: string
          reward_value: string
          stamps_required: number
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          id?: string
          is_active?: boolean
          probability_weight?: number
          reward_description?: string | null
          reward_name: string
          reward_type?: string
          reward_value: string
          stamps_required?: number
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          id?: string
          is_active?: boolean
          probability_weight?: number
          reward_description?: string | null
          reward_name?: string
          reward_type?: string
          reward_value?: string
          stamps_required?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_reward_configs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      business_subscriptions: {
        Row: {
          business_id: string
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          has_used_trial: boolean | null
          id: string
          last_trial_reminder_sent: string | null
          mailerlite_synced_at: string | null
          plan_id: string
          status: string
          stripe_subscription_id: string | null
          trial_end: string | null
          trial_start: string | null
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          has_used_trial?: boolean | null
          id?: string
          last_trial_reminder_sent?: string | null
          mailerlite_synced_at?: string | null
          plan_id: string
          status?: string
          stripe_subscription_id?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          has_used_trial?: boolean | null
          id?: string
          last_trial_reminder_sent?: string | null
          mailerlite_synced_at?: string | null
          plan_id?: string
          status?: string
          stripe_subscription_id?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_subscriptions_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses: {
        Row: {
          brand_colors: Json | null
          brand_fonts: Json | null
          business_type:
            | Database["public"]["Enums"]["business_type_enum"]
            | null
          created_at: string
          description: string | null
          google_review_url: string | null
          id: string
          logo_url: string | null
          name: string
          owner_id: string
          reward_game_type: string | null
          staff_pin: string
          updated_at: string
        }
        Insert: {
          brand_colors?: Json | null
          brand_fonts?: Json | null
          business_type?:
            | Database["public"]["Enums"]["business_type_enum"]
            | null
          created_at?: string
          description?: string | null
          google_review_url?: string | null
          id?: string
          logo_url?: string | null
          name: string
          owner_id: string
          reward_game_type?: string | null
          staff_pin?: string
          updated_at?: string
        }
        Update: {
          brand_colors?: Json | null
          brand_fonts?: Json | null
          business_type?:
            | Database["public"]["Enums"]["business_type_enum"]
            | null
          created_at?: string
          description?: string | null
          google_review_url?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          owner_id?: string
          reward_game_type?: string | null
          staff_pin?: string
          updated_at?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          created_at: string
          customer_id: string | null
          id: string
          is_ai_response: boolean
          message: string
          metadata: Json | null
          session_id: string
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          id?: string
          is_ai_response?: boolean
          message: string
          metadata?: Json | null
          session_id: string
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          id?: string
          is_ai_response?: boolean
          message?: string
          metadata?: Json | null
          session_id?: string
        }
        Relationships: []
      }
      customer_achievements: {
        Row: {
          achievement_id: string
          business_id: string
          claimed_at: string | null
          completed_at: string | null
          customer_id: string
          id: string
          is_completed: boolean
          progress: number
          reward_claimed: boolean
          unlocked_at: string
        }
        Insert: {
          achievement_id: string
          business_id: string
          claimed_at?: string | null
          completed_at?: string | null
          customer_id: string
          id?: string
          is_completed?: boolean
          progress?: number
          reward_claimed?: boolean
          unlocked_at?: string
        }
        Update: {
          achievement_id?: string
          business_id?: string
          claimed_at?: string | null
          completed_at?: string | null
          customer_id?: string
          id?: string
          is_completed?: boolean
          progress?: number
          reward_claimed?: boolean
          unlocked_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_business_memberships: {
        Row: {
          business_id: string
          current_stamps: number
          customer_id: string
          id: string
          joined_at: string
          last_visit_at: string | null
          location_id: string | null
          tier: string
          total_rewards_earned: number
        }
        Insert: {
          business_id: string
          current_stamps?: number
          customer_id: string
          id?: string
          joined_at?: string
          last_visit_at?: string | null
          location_id?: string | null
          tier?: string
          total_rewards_earned?: number
        }
        Update: {
          business_id?: string
          current_stamps?: number
          customer_id?: string
          id?: string
          joined_at?: string
          last_visit_at?: string | null
          location_id?: string | null
          tier?: string
          total_rewards_earned?: number
        }
        Relationships: [
          {
            foreignKeyName: "customer_business_memberships_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_business_memberships_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "business_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_challenge_progress: {
        Row: {
          challenge_id: string
          completed_at: string | null
          created_at: string
          customer_id: string
          id: string
          progress_count: number
          reward_claimed: boolean
          updated_at: string
        }
        Insert: {
          challenge_id: string
          completed_at?: string | null
          created_at?: string
          customer_id: string
          id?: string
          progress_count?: number
          reward_claimed?: boolean
          updated_at?: string
        }
        Update: {
          challenge_id?: string
          completed_at?: string | null
          created_at?: string
          customer_id?: string
          id?: string
          progress_count?: number
          reward_claimed?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_challenge_progress_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "weekly_challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_feedback: {
        Row: {
          business_id: string | null
          cancellation_id: string | null
          contact_for_followup: boolean | null
          feedback_text: string | null
          feedback_type: string
          id: string
          improvement_suggestions: string | null
          metadata: Json | null
          rating: number | null
          submitted_at: string | null
          would_recommend: boolean | null
        }
        Insert: {
          business_id?: string | null
          cancellation_id?: string | null
          contact_for_followup?: boolean | null
          feedback_text?: string | null
          feedback_type?: string
          id?: string
          improvement_suggestions?: string | null
          metadata?: Json | null
          rating?: number | null
          submitted_at?: string | null
          would_recommend?: boolean | null
        }
        Update: {
          business_id?: string | null
          cancellation_id?: string | null
          contact_for_followup?: boolean | null
          feedback_text?: string | null
          feedback_type?: string
          id?: string
          improvement_suggestions?: string | null
          metadata?: Json | null
          rating?: number | null
          submitted_at?: string | null
          would_recommend?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_feedback_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_feedback_cancellation_id_fkey"
            columns: ["cancellation_id"]
            isOneToOne: false
            referencedRelation: "subscription_cancellations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_levels: {
        Row: {
          achievements_unlocked: number
          business_id: string
          created_at: string
          current_level: number
          customer_id: string
          id: string
          points_to_next_level: number
          total_points: number
          updated_at: string
        }
        Insert: {
          achievements_unlocked?: number
          business_id: string
          created_at?: string
          current_level?: number
          customer_id: string
          id?: string
          points_to_next_level?: number
          total_points?: number
          updated_at?: string
        }
        Update: {
          achievements_unlocked?: number
          business_id?: string
          created_at?: string
          current_level?: number
          customer_id?: string
          id?: string
          points_to_next_level?: number
          total_points?: number
          updated_at?: string
        }
        Relationships: []
      }
      customer_retention_emails: {
        Row: {
          business_id: string
          cancellation_id: string
          clicked_at: string | null
          created_at: string
          discount_code: string | null
          discount_percentage: number | null
          email_type: string
          id: string
          metadata: Json | null
          opened_at: string | null
          scheduled_for: string
          sent_at: string | null
          status: string
        }
        Insert: {
          business_id: string
          cancellation_id: string
          clicked_at?: string | null
          created_at?: string
          discount_code?: string | null
          discount_percentage?: number | null
          email_type: string
          id?: string
          metadata?: Json | null
          opened_at?: string | null
          scheduled_for: string
          sent_at?: string | null
          status?: string
        }
        Update: {
          business_id?: string
          cancellation_id?: string
          clicked_at?: string | null
          created_at?: string
          discount_code?: string | null
          discount_percentage?: number | null
          email_type?: string
          id?: string
          metadata?: Json | null
          opened_at?: string | null
          scheduled_for?: string
          sent_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_retention_emails_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_retention_emails_cancellation_id_fkey"
            columns: ["cancellation_id"]
            isOneToOne: false
            referencedRelation: "subscription_cancellations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_sessions: {
        Row: {
          business_id: string
          created_at: string
          customer_id: string
          customer_latitude: number
          customer_longitude: number
          expires_at: string
          id: string
          is_active: boolean
          location_accuracy_meters: number | null
          location_verified_at: string
          session_token: string
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          customer_id: string
          customer_latitude: number
          customer_longitude: number
          expires_at?: string
          id?: string
          is_active?: boolean
          location_accuracy_meters?: number | null
          location_verified_at?: string
          session_token: string
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          customer_id?: string
          customer_latitude?: number
          customer_longitude?: number
          expires_at?: string
          id?: string
          is_active?: boolean
          location_accuracy_meters?: number | null
          location_verified_at?: string
          session_token?: string
          updated_at?: string
        }
        Relationships: []
      }
      customer_streaks: {
        Row: {
          best_streak: number
          business_id: string
          created_at: string
          current_streak: number
          customer_id: string
          id: string
          last_visit_date: string | null
          streak_start_date: string | null
          updated_at: string
        }
        Insert: {
          best_streak?: number
          business_id: string
          created_at?: string
          current_streak?: number
          customer_id: string
          id?: string
          last_visit_date?: string | null
          streak_start_date?: string | null
          updated_at?: string
        }
        Update: {
          best_streak?: number
          business_id?: string
          created_at?: string
          current_streak?: number
          customer_id?: string
          id?: string
          last_visit_date?: string | null
          streak_start_date?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_streaks_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_xp: {
        Row: {
          business_id: string
          created_at: string
          current_level: number
          customer_id: string
          id: string
          total_xp: number
          updated_at: string
          xp_to_next_level: number
        }
        Insert: {
          business_id: string
          created_at?: string
          current_level?: number
          customer_id: string
          id?: string
          total_xp?: number
          updated_at?: string
          xp_to_next_level?: number
        }
        Update: {
          business_id?: string
          created_at?: string
          current_level?: number
          customer_id?: string
          id?: string
          total_xp?: number
          updated_at?: string
          xp_to_next_level?: number
        }
        Relationships: [
          {
            foreignKeyName: "customer_xp_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      email_automation_log: {
        Row: {
          business_id: string | null
          created_at: string | null
          email_type: string
          id: string
          mailerlite_campaign_id: string | null
          metadata: Json | null
          sent_at: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string | null
          email_type: string
          id?: string
          mailerlite_campaign_id?: string | null
          metadata?: Json | null
          sent_at?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string | null
          email_type?: string
          id?: string
          mailerlite_campaign_id?: string | null
          metadata?: Json | null
          sent_at?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_automation_log_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      error_reports: {
        Row: {
          additional_context: Json | null
          build_version: string | null
          component_name: string | null
          created_at: string
          error_message: string
          error_stack: string
          id: string
          resolved: boolean | null
          resolved_at: string | null
          resolved_by: string | null
          route: string
          session_id: string
          severity: string
          timestamp: string
          user_agent: string
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          additional_context?: Json | null
          build_version?: string | null
          component_name?: string | null
          created_at?: string
          error_message: string
          error_stack: string
          id?: string
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          route: string
          session_id: string
          severity: string
          timestamp?: string
          user_agent: string
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          additional_context?: Json | null
          build_version?: string | null
          component_name?: string | null
          created_at?: string
          error_message?: string
          error_stack?: string
          id?: string
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          route?: string
          session_id?: string
          severity?: string
          timestamp?: string
          user_agent?: string
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      failed_login_attempts: {
        Row: {
          attempt_time: string
          email: string
          failure_reason: string | null
          id: string
          ip_address: unknown
          metadata: Json | null
          user_agent: string | null
        }
        Insert: {
          attempt_time?: string
          email: string
          failure_reason?: string | null
          id?: string
          ip_address: unknown
          metadata?: Json | null
          user_agent?: string | null
        }
        Update: {
          attempt_time?: string
          email?: string
          failure_reason?: string | null
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          user_agent?: string | null
        }
        Relationships: []
      }
      feature_comments: {
        Row: {
          comment: string
          created_at: string
          customer_id: string
          feature_request_id: string | null
          id: string
          is_official: boolean
          roadmap_feature_id: string | null
          updated_at: string
        }
        Insert: {
          comment: string
          created_at?: string
          customer_id: string
          feature_request_id?: string | null
          id?: string
          is_official?: boolean
          roadmap_feature_id?: string | null
          updated_at?: string
        }
        Update: {
          comment?: string
          created_at?: string
          customer_id?: string
          feature_request_id?: string | null
          id?: string
          is_official?: boolean
          roadmap_feature_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "feature_comments_feature_request_id_fkey"
            columns: ["feature_request_id"]
            isOneToOne: false
            referencedRelation: "feature_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_comments_roadmap_feature_id_fkey"
            columns: ["roadmap_feature_id"]
            isOneToOne: false
            referencedRelation: "roadmap_features"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_requests: {
        Row: {
          business_id: string
          category: string
          created_at: string
          customer_id: string
          description: string
          id: string
          reviewed_at: string | null
          reviewed_by: string | null
          roadmap_feature_id: string | null
          status: string
          title: string
          updated_at: string
          votes_count: number
        }
        Insert: {
          business_id: string
          category?: string
          created_at?: string
          customer_id: string
          description: string
          id?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          roadmap_feature_id?: string | null
          status?: string
          title: string
          updated_at?: string
          votes_count?: number
        }
        Update: {
          business_id?: string
          category?: string
          created_at?: string
          customer_id?: string
          description?: string
          id?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          roadmap_feature_id?: string | null
          status?: string
          title?: string
          updated_at?: string
          votes_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "feature_requests_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_roadmap_feature_id_fkey"
            columns: ["roadmap_feature_id"]
            isOneToOne: false
            referencedRelation: "roadmap_features"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_votes: {
        Row: {
          created_at: string
          customer_id: string
          feature_request_id: string | null
          id: string
          roadmap_feature_id: string | null
        }
        Insert: {
          created_at?: string
          customer_id: string
          feature_request_id?: string | null
          id?: string
          roadmap_feature_id?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string
          feature_request_id?: string | null
          id?: string
          roadmap_feature_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feature_votes_feature_request_id_fkey"
            columns: ["feature_request_id"]
            isOneToOne: false
            referencedRelation: "feature_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_votes_roadmap_feature_id_fkey"
            columns: ["roadmap_feature_id"]
            isOneToOne: false
            referencedRelation: "roadmap_features"
            referencedColumns: ["id"]
          },
        ]
      }
      gift_box_rewards: {
        Row: {
          business_id: string
          created_at: string
          emoji: string | null
          id: string
          is_active: boolean
          probability_weight: number
          rarity: string
          reward_description: string | null
          reward_name: string
          reward_type: string
          reward_value: string
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          emoji?: string | null
          id?: string
          is_active?: boolean
          probability_weight?: number
          rarity?: string
          reward_description?: string | null
          reward_name: string
          reward_type?: string
          reward_value: string
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          emoji?: string | null
          id?: string
          is_active?: boolean
          probability_weight?: number
          rarity?: string
          reward_description?: string | null
          reward_name?: string
          reward_type?: string
          reward_value?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gift_box_rewards_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      ip_blocklist: {
        Row: {
          blocked_at: string
          blocked_by: string | null
          expires_at: string | null
          id: string
          ip_address: unknown
          is_active: boolean | null
          metadata: Json | null
          reason: string
        }
        Insert: {
          blocked_at?: string
          blocked_by?: string | null
          expires_at?: string | null
          id?: string
          ip_address: unknown
          is_active?: boolean | null
          metadata?: Json | null
          reason: string
        }
        Update: {
          blocked_at?: string
          blocked_by?: string | null
          expires_at?: string | null
          id?: string
          ip_address?: unknown
          is_active?: boolean | null
          metadata?: Json | null
          reason?: string
        }
        Relationships: []
      }
      notification_logs: {
        Row: {
          business_id: string
          clicked: boolean
          clicked_at: string | null
          customer_id: string
          id: string
          message: string
          metadata: Json | null
          notification_type: string
          sent_at: string
          title: string
        }
        Insert: {
          business_id: string
          clicked?: boolean
          clicked_at?: string | null
          customer_id: string
          id?: string
          message: string
          metadata?: Json | null
          notification_type: string
          sent_at?: string
          title: string
        }
        Update: {
          business_id?: string
          clicked?: boolean
          clicked_at?: string | null
          customer_id?: string
          id?: string
          message?: string
          metadata?: Json | null
          notification_type?: string
          sent_at?: string
          title?: string
        }
        Relationships: []
      }
      notification_preferences: {
        Row: {
          business_id: string
          created_at: string
          customer_id: string
          friend_activity: boolean
          id: string
          new_challenges: boolean
          reward_ready: boolean
          special_offers: boolean
          updated_at: string
          visit_reminders: boolean
        }
        Insert: {
          business_id: string
          created_at?: string
          customer_id: string
          friend_activity?: boolean
          id?: string
          new_challenges?: boolean
          reward_ready?: boolean
          special_offers?: boolean
          updated_at?: string
          visit_reminders?: boolean
        }
        Update: {
          business_id?: string
          created_at?: string
          customer_id?: string
          friend_activity?: boolean
          id?: string
          new_challenges?: boolean
          reward_ready?: boolean
          special_offers?: boolean
          updated_at?: string
          visit_reminders?: boolean
        }
        Relationships: []
      }
      performance_metrics: {
        Row: {
          additional_data: Json | null
          created_at: string
          id: string
          metric_name: string
          metric_value: number
          route: string
          session_id: string
          timestamp: string
          user_id: string | null
        }
        Insert: {
          additional_data?: Json | null
          created_at?: string
          id?: string
          metric_name: string
          metric_value: number
          route: string
          session_id: string
          timestamp?: string
          user_id?: string | null
        }
        Update: {
          additional_data?: Json | null
          created_at?: string
          id?: string
          metric_name?: string
          metric_value?: number
          route?: string
          session_id?: string
          timestamp?: string
          user_id?: string | null
        }
        Relationships: []
      }
      phone_verification_codes: {
        Row: {
          code: string
          created_at: string
          expires_at: string
          id: string
          phone: string
          user_id: string
        }
        Insert: {
          code: string
          created_at?: string
          expires_at: string
          id?: string
          phone: string
          user_id: string
        }
        Update: {
          code?: string
          created_at?: string
          expires_at?: string
          id?: string
          phone?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          birthday: string | null
          created_at: string
          email_preferences: Json | null
          first_name: string | null
          id: string
          last_name: string | null
          mailerlite_subscriber_id: string | null
          mailerlite_synced_at: string | null
          phone: string | null
          phone_verified: boolean | null
          sms_marketing_consent: boolean | null
          updated_at: string
          wants_text_rewards: boolean | null
        }
        Insert: {
          birthday?: string | null
          created_at?: string
          email_preferences?: Json | null
          first_name?: string | null
          id: string
          last_name?: string | null
          mailerlite_subscriber_id?: string | null
          mailerlite_synced_at?: string | null
          phone?: string | null
          phone_verified?: boolean | null
          sms_marketing_consent?: boolean | null
          updated_at?: string
          wants_text_rewards?: boolean | null
        }
        Update: {
          birthday?: string | null
          created_at?: string
          email_preferences?: Json | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          mailerlite_subscriber_id?: string | null
          mailerlite_synced_at?: string | null
          phone?: string | null
          phone_verified?: boolean | null
          sms_marketing_consent?: boolean | null
          updated_at?: string
          wants_text_rewards?: boolean | null
        }
        Relationships: []
      }
      push_subscriptions: {
        Row: {
          auth_key: string
          business_id: string
          created_at: string
          customer_id: string
          endpoint: string
          id: string
          is_active: boolean
          p256dh_key: string
          updated_at: string
          user_agent: string | null
        }
        Insert: {
          auth_key: string
          business_id: string
          created_at?: string
          customer_id: string
          endpoint: string
          id?: string
          is_active?: boolean
          p256dh_key: string
          updated_at?: string
          user_agent?: string | null
        }
        Update: {
          auth_key?: string
          business_id?: string
          created_at?: string
          customer_id?: string
          endpoint?: string
          id?: string
          is_active?: boolean
          p256dh_key?: string
          updated_at?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      recommendation_feedback: {
        Row: {
          business_id: string
          created_at: string
          feedback_text: string | null
          id: string
          is_helpful: boolean | null
          rating: number | null
          recommendation_id: string
        }
        Insert: {
          business_id: string
          created_at?: string
          feedback_text?: string | null
          id?: string
          is_helpful?: boolean | null
          rating?: number | null
          recommendation_id: string
        }
        Update: {
          business_id?: string
          created_at?: string
          feedback_text?: string | null
          id?: string
          is_helpful?: boolean | null
          rating?: number | null
          recommendation_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recommendation_feedback_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "ai_recommendations"
            referencedColumns: ["id"]
          },
        ]
      }
      rewards: {
        Row: {
          business_id: string
          claimed_at: string
          customer_id: string
          id: string
          location_id: string | null
          reward_type: string
        }
        Insert: {
          business_id: string
          claimed_at?: string
          customer_id: string
          id?: string
          location_id?: string | null
          reward_type?: string
        }
        Update: {
          business_id?: string
          claimed_at?: string
          customer_id?: string
          id?: string
          location_id?: string | null
          reward_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "rewards_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rewards_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "business_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      roadmap_features: {
        Row: {
          business_id: string
          category: string
          completed_at: string | null
          created_at: string
          created_by: string
          description: string
          estimated_completion: string | null
          id: string
          priority: string
          status: string
          title: string
          updated_at: string
          votes_count: number
        }
        Insert: {
          business_id: string
          category?: string
          completed_at?: string | null
          created_at?: string
          created_by: string
          description: string
          estimated_completion?: string | null
          id?: string
          priority?: string
          status?: string
          title: string
          updated_at?: string
          votes_count?: number
        }
        Update: {
          business_id?: string
          category?: string
          completed_at?: string | null
          created_at?: string
          created_by?: string
          description?: string
          estimated_completion?: string | null
          id?: string
          priority?: string
          status?: string
          title?: string
          updated_at?: string
          votes_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "roadmap_features_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      security_alerts: {
        Row: {
          alert_type: string
          created_at: string
          description: string
          id: string
          ip_address: unknown | null
          metadata: Json | null
          resolved: boolean | null
          resolved_at: string | null
          resolved_by: string | null
          severity: string
          title: string
          user_id: string | null
        }
        Insert: {
          alert_type: string
          created_at?: string
          description: string
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          severity: string
          title: string
          user_id?: string | null
        }
        Update: {
          alert_type?: string
          created_at?: string
          description?: string
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      security_audit_log: {
        Row: {
          action_type: string
          created_at: string
          id: string
          ip_address: unknown | null
          metadata: Json | null
          resource_id: string | null
          resource_type: string | null
          session_id: string | null
          severity: string | null
          timestamp: string
          user_agent: string | null
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          action_type: string
          created_at?: string
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          resource_id?: string | null
          resource_type?: string | null
          session_id?: string | null
          severity?: string | null
          timestamp?: string
          user_agent?: string | null
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          action_type?: string
          created_at?: string
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          resource_id?: string | null
          resource_type?: string | null
          session_id?: string | null
          severity?: string | null
          timestamp?: string
          user_agent?: string | null
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      sms_billing: {
        Row: {
          billing_month: number
          billing_year: number
          business_id: string
          created_at: string
          id: string
          overage_amount_cents: number
          overage_credits: number
          status: string
          stripe_invoice_id: string | null
          updated_at: string
        }
        Insert: {
          billing_month: number
          billing_year: number
          business_id: string
          created_at?: string
          id?: string
          overage_amount_cents?: number
          overage_credits?: number
          status?: string
          stripe_invoice_id?: string | null
          updated_at?: string
        }
        Update: {
          billing_month?: number
          billing_year?: number
          business_id?: string
          created_at?: string
          id?: string
          overage_amount_cents?: number
          overage_credits?: number
          status?: string
          stripe_invoice_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sms_billing_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      sms_campaign_recipients: {
        Row: {
          campaign_id: string
          created_at: string
          customer_id: string
          error_message: string | null
          id: string
          phone_number: string
          sent_at: string | null
          status: string
          twilio_message_sid: string | null
        }
        Insert: {
          campaign_id: string
          created_at?: string
          customer_id: string
          error_message?: string | null
          id?: string
          phone_number: string
          sent_at?: string | null
          status?: string
          twilio_message_sid?: string | null
        }
        Update: {
          campaign_id?: string
          created_at?: string
          customer_id?: string
          error_message?: string | null
          id?: string
          phone_number?: string
          sent_at?: string | null
          status?: string
          twilio_message_sid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sms_campaign_recipients_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "sms_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      sms_campaigns: {
        Row: {
          business_id: string
          campaign_name: string
          created_at: string
          failed_count: number | null
          id: string
          message_content: string
          scheduled_at: string | null
          sender_name: string | null
          sent_at: string | null
          sent_count: number | null
          status: string
          total_recipients: number | null
          updated_at: string
        }
        Insert: {
          business_id: string
          campaign_name: string
          created_at?: string
          failed_count?: number | null
          id?: string
          message_content: string
          scheduled_at?: string | null
          sender_name?: string | null
          sent_at?: string | null
          sent_count?: number | null
          status?: string
          total_recipients?: number | null
          updated_at?: string
        }
        Update: {
          business_id?: string
          campaign_name?: string
          created_at?: string
          failed_count?: number | null
          id?: string
          message_content?: string
          scheduled_at?: string | null
          sender_name?: string | null
          sent_at?: string | null
          sent_count?: number | null
          status?: string
          total_recipients?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      sms_logs: {
        Row: {
          business_id: string
          campaign_id: string | null
          cost_cents: number | null
          created_at: string
          credits_used: number
          customer_id: string | null
          error_message: string | null
          id: string
          message_content: string
          phone_number: string
          sent_at: string | null
          status: string
          twilio_message_sid: string | null
        }
        Insert: {
          business_id: string
          campaign_id?: string | null
          cost_cents?: number | null
          created_at?: string
          credits_used?: number
          customer_id?: string | null
          error_message?: string | null
          id?: string
          message_content: string
          phone_number: string
          sent_at?: string | null
          status?: string
          twilio_message_sid?: string | null
        }
        Update: {
          business_id?: string
          campaign_id?: string | null
          cost_cents?: number | null
          created_at?: string
          credits_used?: number
          customer_id?: string | null
          error_message?: string | null
          id?: string
          message_content?: string
          phone_number?: string
          sent_at?: string | null
          status?: string
          twilio_message_sid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sms_logs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sms_logs_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "sms_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      sms_usage: {
        Row: {
          business_id: string
          created_at: string
          id: string
          included_credits: number
          month: number
          overage_credits: number
          purchased_credits: number
          updated_at: string
          used_credits: number
          year: number
        }
        Insert: {
          business_id: string
          created_at?: string
          id?: string
          included_credits?: number
          month: number
          overage_credits?: number
          purchased_credits?: number
          updated_at?: string
          used_credits?: number
          year: number
        }
        Update: {
          business_id?: string
          created_at?: string
          id?: string
          included_credits?: number
          month?: number
          overage_credits?: number
          purchased_credits?: number
          updated_at?: string
          used_credits?: number
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "sms_usage_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_members: {
        Row: {
          assigned_location_ids: string[] | null
          business_id: string
          created_at: string
          email: string
          id: string
          is_active: boolean
          role: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          assigned_location_ids?: string[] | null
          business_id: string
          created_at?: string
          email: string
          id?: string
          is_active?: boolean
          role?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          assigned_location_ids?: string[] | null
          business_id?: string
          created_at?: string
          email?: string
          id?: string
          is_active?: boolean
          role?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_members_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_cancellations: {
        Row: {
          business_id: string
          cancellation_feedback: string | null
          cancellation_reason: string | null
          cancelled_at: string
          created_at: string
          final_loss_at: string | null
          id: string
          last_contact_at: string | null
          recovered_at: string | null
          recovery_value_cents: number | null
          retention_attempt_count: number
          revenue_at_cancellation_cents: number
          subscription_id: string
          updated_at: string
          win_back_discount_code: string | null
          win_back_discount_percentage: number | null
          win_back_status: string
        }
        Insert: {
          business_id: string
          cancellation_feedback?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string
          created_at?: string
          final_loss_at?: string | null
          id?: string
          last_contact_at?: string | null
          recovered_at?: string | null
          recovery_value_cents?: number | null
          retention_attempt_count?: number
          revenue_at_cancellation_cents?: number
          subscription_id: string
          updated_at?: string
          win_back_discount_code?: string | null
          win_back_discount_percentage?: number | null
          win_back_status?: string
        }
        Update: {
          business_id?: string
          cancellation_feedback?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string
          created_at?: string
          final_loss_at?: string | null
          id?: string
          last_contact_at?: string | null
          recovered_at?: string | null
          recovery_value_cents?: number | null
          retention_attempt_count?: number
          revenue_at_cancellation_cents?: number
          subscription_id?: string
          updated_at?: string
          win_back_discount_code?: string | null
          win_back_discount_percentage?: number | null
          win_back_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_cancellations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          billing_period: string
          created_at: string
          description: string | null
          features: Json
          id: string
          included_sms_credits: number | null
          is_active: boolean
          max_locations: number | null
          max_loyalty_cards: number | null
          max_staff_members: number | null
          name: string
          overage_rate_cents: number | null
          price_cents: number
          stripe_price_id: string | null
          trial_days: number | null
          updated_at: string
        }
        Insert: {
          billing_period?: string
          created_at?: string
          description?: string | null
          features?: Json
          id?: string
          included_sms_credits?: number | null
          is_active?: boolean
          max_locations?: number | null
          max_loyalty_cards?: number | null
          max_staff_members?: number | null
          name: string
          overage_rate_cents?: number | null
          price_cents?: number
          stripe_price_id?: string | null
          trial_days?: number | null
          updated_at?: string
        }
        Update: {
          billing_period?: string
          created_at?: string
          description?: string | null
          features?: Json
          id?: string
          included_sms_credits?: number | null
          is_active?: boolean
          max_locations?: number | null
          max_loyalty_cards?: number | null
          max_staff_members?: number | null
          name?: string
          overage_rate_cents?: number | null
          price_cents?: number
          stripe_price_id?: string | null
          trial_days?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      support_tickets: {
        Row: {
          business_id: string | null
          created_at: string
          email: string
          id: string
          message: string
          priority: string
          resolved_at: string | null
          status: string
          subject: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          priority?: string
          resolved_at?: string | null
          status?: string
          subject: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          priority?: string
          resolved_at?: string | null
          status?: string
          subject?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "support_tickets_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          device_info: Json | null
          ended_at: string | null
          id: string
          ip_address: string | null
          last_activity_at: string
          pages_visited: number | null
          session_id: string
          started_at: string
          total_time_seconds: number | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          device_info?: Json | null
          ended_at?: string | null
          id?: string
          ip_address?: string | null
          last_activity_at?: string
          pages_visited?: number | null
          session_id: string
          started_at?: string
          total_time_seconds?: number | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          device_info?: Json | null
          ended_at?: string | null
          id?: string
          ip_address?: string | null
          last_activity_at?: string
          pages_visited?: number | null
          session_id?: string
          started_at?: string
          total_time_seconds?: number | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      visits: {
        Row: {
          business_id: string
          customer_id: string
          customer_latitude: number | null
          customer_longitude: number | null
          distance_from_business_meters: number | null
          id: string
          location_accuracy_meters: number | null
          location_id: string | null
          location_verified: boolean | null
          session_id: string | null
          stamps_earned: number
          verification_method: string | null
          visited_at: string
        }
        Insert: {
          business_id: string
          customer_id: string
          customer_latitude?: number | null
          customer_longitude?: number | null
          distance_from_business_meters?: number | null
          id?: string
          location_accuracy_meters?: number | null
          location_id?: string | null
          location_verified?: boolean | null
          session_id?: string | null
          stamps_earned?: number
          verification_method?: string | null
          visited_at?: string
        }
        Update: {
          business_id?: string
          customer_id?: string
          customer_latitude?: number | null
          customer_longitude?: number | null
          distance_from_business_meters?: number | null
          id?: string
          location_accuracy_meters?: number | null
          location_id?: string | null
          location_verified?: boolean | null
          session_id?: string | null
          stamps_earned?: number
          verification_method?: string | null
          visited_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "visits_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visits_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "business_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visits_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "customer_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      weekly_challenges: {
        Row: {
          business_id: string
          challenge_type: string
          created_at: string
          description: string
          end_date: string
          id: string
          is_active: boolean
          reward_type: string
          reward_value: number
          start_date: string
          target_value: number
          title: string
          updated_at: string
          xp_reward: number
        }
        Insert: {
          business_id: string
          challenge_type: string
          created_at?: string
          description: string
          end_date: string
          id?: string
          is_active?: boolean
          reward_type?: string
          reward_value?: number
          start_date: string
          target_value: number
          title: string
          updated_at?: string
          xp_reward?: number
        }
        Update: {
          business_id?: string
          challenge_type?: string
          created_at?: string
          description?: string
          end_date?: string
          id?: string
          is_active?: boolean
          reward_type?: string
          reward_value?: number
          start_date?: string
          target_value?: number
          title?: string
          updated_at?: string
          xp_reward?: number
        }
        Relationships: [
          {
            foreignKeyName: "weekly_challenges_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      xp_activities: {
        Row: {
          activity_description: string | null
          activity_type: string
          business_id: string
          created_at: string
          customer_id: string
          id: string
          metadata: Json | null
          xp_earned: number
        }
        Insert: {
          activity_description?: string | null
          activity_type: string
          business_id: string
          created_at?: string
          customer_id: string
          id?: string
          metadata?: Json | null
          xp_earned?: number
        }
        Update: {
          activity_description?: string | null
          activity_type?: string
          business_id?: string
          created_at?: string
          customer_id?: string
          id?: string
          metadata?: Json | null
          xp_earned?: number
        }
        Relationships: [
          {
            foreignKeyName: "xp_activities_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_achievement_points: {
        Args: { p_customer_id: string; p_business_id: string; p_points: number }
        Returns: Json
      }
      add_customer_xp: {
        Args: {
          p_customer_id: string
          p_business_id: string
          p_xp_amount: number
          p_activity_type: string
          p_description?: string
        }
        Returns: Json
      }
      bytea_to_text: {
        Args: { data: string }
        Returns: string
      }
      calculate_monthly_commissions: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_expired_sessions: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_old_monitoring_data: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_security_logs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      decrement_vote_count: {
        Args: { table_name: string; feature_id: string }
        Returns: undefined
      }
      generate_customer_retention_recommendations: {
        Args: { p_business_id: string }
        Returns: Json
      }
      generate_referral_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_win_back_discount_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_current_sms_usage: {
        Args: { p_business_id: string }
        Returns: {
          included_credits: number
          used_credits: number
          remaining_credits: number
          overage_credits: number
          overage_cost_cents: number
        }[]
      }
      get_enhanced_platform_metrics: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_businesses: number
          total_customers: number
          monthly_active_users: number
          monthly_rewards_claimed: number
          active_trials: number
          total_trials_started: number
          trial_conversion_rate: number
          recent_errors: number
          unresolved_security_alerts: number
          customer_signups_today: number
          customer_signups_this_week: number
          customer_signups_this_month: number
        }[]
      }
      get_platform_metrics: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_businesses: number
          total_customers: number
          monthly_active_users: number
          monthly_rewards_claimed: number
        }[]
      }
      get_random_gift_box_reward: {
        Args: { p_business_id: string }
        Returns: Json
      }
      get_staff_business_id: {
        Args: { p_user_id: string }
        Returns: string
      }
      get_system_health_summary: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_errors_24h: number
          critical_errors_24h: number
          avg_page_load_time_24h: number
          active_sessions: number
          error_rate_24h: number
        }[]
      }
      get_user_role: {
        Args: { user_id: string } | { user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      handle_failed_login: {
        Args: {
          p_email: string
          p_ip_address: unknown
          p_user_agent?: string
          p_failure_reason?: string
        }
        Returns: boolean
      }
      has_premium_subscription: {
        Args: { p_business_id: string }
        Returns: boolean
      }
      has_role: {
        Args:
          | {
              user_id: string
              check_role: Database["public"]["Enums"]["app_role"]
            }
          | {
              user_id: string
              check_role: Database["public"]["Enums"]["app_role"]
            }
        Returns: boolean
      }
      http: {
        Args: { request: Database["public"]["CompositeTypes"]["http_request"] }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_delete: {
        Args:
          | { uri: string }
          | { uri: string; content: string; content_type: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_get: {
        Args: { uri: string } | { uri: string; data: Json }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_head: {
        Args: { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_header: {
        Args: { field: string; value: string }
        Returns: Database["public"]["CompositeTypes"]["http_header"]
      }
      http_list_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: {
          curlopt: string
          value: string
        }[]
      }
      http_patch: {
        Args: { uri: string; content: string; content_type: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_post: {
        Args:
          | { uri: string; content: string; content_type: string }
          | { uri: string; data: Json }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_put: {
        Args: { uri: string; content: string; content_type: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_reset_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      http_set_curlopt: {
        Args: { curlopt: string; value: string }
        Returns: boolean
      }
      increment_vote_count: {
        Args: { table_name: string; feature_id: string }
        Returns: undefined
      }
      is_ip_blocked: {
        Args: { p_ip_address: unknown }
        Returns: boolean
      }
      is_staff_for_business: {
        Args: { p_user_id: string; p_business_id: string }
        Returns: boolean
      }
      log_security_event: {
        Args: {
          p_user_id: string
          p_user_email: string
          p_action_type: string
          p_resource_type?: string
          p_resource_id?: string
          p_ip_address?: unknown
          p_user_agent?: string
          p_session_id?: string
          p_metadata?: Json
          p_severity?: string
        }
        Returns: string
      }
      make_user_admin: {
        Args: { user_email: string }
        Returns: undefined
      }
      start_trial_for_business: {
        Args: { business_id_param: string; plan_id_param: string }
        Returns: undefined
      }
      text_to_bytea: {
        Args: { data: string }
        Returns: string
      }
      track_sms_usage: {
        Args: {
          p_business_id: string
          p_phone_number: string
          p_message_content: string
          p_customer_id?: string
          p_campaign_id?: string
          p_credits_used?: number
          p_cost_cents?: number
          p_twilio_message_sid?: string
        }
        Returns: Json
      }
      trigger_email_scheduler: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      update_achievement_progress: {
        Args: {
          p_customer_id: string
          p_business_id: string
          p_requirement_type: string
          p_current_value: number
        }
        Returns: Json
      }
      update_challenge_progress: {
        Args: {
          p_customer_id: string
          p_business_id: string
          p_challenge_type: string
          p_increment?: number
        }
        Returns: Json
      }
      update_customer_streak: {
        Args: {
          p_customer_id: string
          p_business_id: string
          p_visit_date?: string
        }
        Returns: Json
      }
      urlencode: {
        Args: { data: Json } | { string: string } | { string: string }
        Returns: string
      }
    }
    Enums: {
      app_role: "admin" | "business" | "customer" | "staff"
      business_type_enum:
        | "cafe"
        | "restaurant"
        | "retail"
        | "nail_salon"
        | "laundromat"
        | "auto_repair"
        | "pet_groomer"
        | "dry_cleaner"
        | "barber_shop"
        | "fitness_studio"
        | "beauty_salon"
        | "other_service"
    }
    CompositeTypes: {
      http_header: {
        field: string | null
        value: string | null
      }
      http_request: {
        method: unknown | null
        uri: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content_type: string | null
        content: string | null
      }
      http_response: {
        status: number | null
        content_type: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content: string | null
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "business", "customer", "staff"],
      business_type_enum: [
        "cafe",
        "restaurant",
        "retail",
        "nail_salon",
        "laundromat",
        "auto_repair",
        "pet_groomer",
        "dry_cleaner",
        "barber_shop",
        "fitness_studio",
        "beauty_salon",
        "other_service",
      ],
    },
  },
} as const

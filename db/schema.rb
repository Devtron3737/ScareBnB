# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151027010202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listing_ratings", force: :cascade do |t|
    t.integer "reservation_id", null: false
    t.text    "review"
    t.integer "creepiness",     null: false
  end

  add_index "listing_ratings", ["reservation_id"], name: "index_listing_ratings_on_reservation_id", using: :btree

  create_table "listings", force: :cascade do |t|
    t.integer "ghost_id",    null: false
    t.integer "toe_nails",   null: false
    t.string  "city",        null: false
    t.string  "state",       null: false
    t.string  "address",     null: false
    t.json    "amenities",   null: false
    t.text    "description", null: false
    t.float   "lat"
    t.float   "lng"
  end

  add_index "listings", ["ghost_id"], name: "index_listings_on_ghost_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer "from_user",                 null: false
    t.integer "to_user",                   null: false
    t.text    "content"
    t.string  "title"
    t.boolean "read",      default: false
  end

  add_index "messages", ["from_user"], name: "index_messages_on_from_user", using: :btree
  add_index "messages", ["to_user"], name: "index_messages_on_to_user", using: :btree

  create_table "notifications", force: :cascade do |t|
    t.string  "action_type",                    null: false
    t.integer "user_id",                        null: false
    t.integer "reservation_id"
    t.boolean "read",           default: false, null: false
  end

  add_index "notifications", ["reservation_id"], name: "index_notifications_on_reservation_id", using: :btree
  add_index "notifications", ["user_id"], name: "index_notifications_on_user_id", using: :btree

  create_table "pictures", force: :cascade do |t|
    t.integer "user_id"
    t.integer "listing_id"
  end

  add_index "pictures", ["listing_id"], name: "index_pictures_on_listing_id", using: :btree
  add_index "pictures", ["user_id"], name: "index_pictures_on_user_id", using: :btree

  create_table "reservations", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.date    "check_in",   null: false
    t.date    "check_out",  null: false
    t.integer "guest_id",   null: false
  end

  add_index "reservations", ["guest_id"], name: "index_reservations_on_guest_id", using: :btree
  add_index "reservations", ["listing_id"], name: "index_reservations_on_listing_id", using: :btree

  create_table "user_ratings", force: :cascade do |t|
    t.integer "reservation_id", null: false
    t.text    "review"
    t.integer "creepiness"
  end

  add_index "user_ratings", ["reservation_id"], name: "index_user_ratings_on_reservation_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "fname",    null: false
    t.string "lname"
    t.string "email"
    t.text   "about"
    t.string "hometown"
    t.string "password", null: false
  end

end

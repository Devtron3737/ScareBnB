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

ActiveRecord::Schema.define(version: 20151125233559) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.integer "ghost_id",    null: false
    t.integer "toe_nails",   null: false
    t.string  "address",     null: false
    t.json    "amenities",   null: false
    t.text    "description", null: false
    t.float   "lat"
    t.float   "lng"
    t.string  "title",       null: false
  end

  add_index "listings", ["ghost_id"], name: "index_listings_on_ghost_id", using: :btree

  create_table "pictures", force: :cascade do |t|
    t.integer "user_id"
    t.integer "listing_id"
    t.string  "url"
  end

  add_index "pictures", ["listing_id"], name: "index_pictures_on_listing_id", using: :btree
  add_index "pictures", ["user_id"], name: "index_pictures_on_user_id", using: :btree

  create_table "reservations", force: :cascade do |t|
    t.integer "listing_id",                          null: false
    t.date    "check_in",                            null: false
    t.date    "check_out",                           null: false
    t.integer "guest_id",                            null: false
    t.string  "status",     default: "needs action"
  end

  add_index "reservations", ["guest_id"], name: "index_reservations_on_guest_id", using: :btree
  add_index "reservations", ["listing_id"], name: "index_reservations_on_listing_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "pwd_digest",     null: false
    t.string "username"
    t.string "sesssion_token", null: false
  end

end

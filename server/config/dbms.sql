-- TEMPLATE DATABASE TABLE DESIGN
CREATE TABLE IF NOT EXISTS template(
    template_id VARCHAR(255) PRIMARY KEY,
    template_title VARCHAR(255),
    template_name VARCHAR(255),
    template_price DECIMAL(10, 2),
    template_thumbnail VARCHAR(255),
    template_gallery TEXT,
    template_desc TEXT,
    template_down_uri TEXT,
    template_tech_stack VARCHAR(255),
    template_usecase VARCHAR(255) COMMENT 'what is the purposes of this template',
    template_ui_framework VARCHAR(255),
    template_backend INT,
    template_free INT COMMENT "this is free template or not",
    template_downloads INT COMMENT "how much downloads gains",
    template_category VARCHAR(255) COMMENT "what is the type of the template theme or plugin  ",
    template_author VARCHAR(255),
    template_sold INT,
    template_status INT,
) -- THEME TEMPLATE DATABASE TABLE DESIGN
CREATE TABLE IF NOT EXISTS theme_tmp(
    theme_tmp_id VARCHAR(255) PRIMARY KEY,
    theme_tmp_title VARCHAR(255),
    theme_tmp_name VARCHAR(255),
    theme_tmp_price DECIMAL(10, 2),
    theme_tmp_thumbnail VARCHAR(255),
    theme_tmp_gallery TEXT,
    theme_tmp_desc TEXT,
    theme_tmp_down_uri TEXT,
    theme_tmp_editor VARCHAR(255) COMMENT "which framework, elementor, divi, wpbakery, elementor pro, php",
    theme_tmp_usecase VARCHAR(255) COMMENT 'what is the purposes of this template',
    theme_tmp_free INT COMMENT "this is free template or not",
    theme_tmp_downloads INT COMMENT "how much downloads gains",
    theme_tmp_category VARCHAR(255) COMMENT "what is the type of the template theme or plugin  ",
    theme_tmp_author VARCHAR(255),
    theme_tmp_sold INT,
    theme_tmp_status INT,
)
CREATE TABLE IF NOT EXISTS plugins(
    plugins_id VARCHAR(255) PRIMARY KEY,
    plugins_title VARCHAR(255),
    plugins_name VARCHAR(255),
    plugins_price DECIMAL(10, 2),
    plugins_thumbnail VARCHAR(255),
    plugins_gallery TEXT,
    plugins_desc TEXT,
    plugins_down_uri TEXT,
    plugins_usecase VARCHAR(255) COMMENT 'what is the purposes of this template',
    plugins_free INT COMMENT "this is free template or not",
    plugins_downloads INT COMMENT "how much downloads gains",
    plugins_category VARCHAR(255) COMMENT "what is the type of the template theme or plugin  ",
    plugins_author VARCHAR(255),
    plugins_sold INT,
    plugins_status INT,
)
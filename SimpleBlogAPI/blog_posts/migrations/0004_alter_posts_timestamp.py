# Generated by Django 5.0.6 on 2024-06-08 15:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_posts', '0003_alter_posts_timestamp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime(2024, 6, 8, 18, 21, 42, 638604)),
        ),
    ]

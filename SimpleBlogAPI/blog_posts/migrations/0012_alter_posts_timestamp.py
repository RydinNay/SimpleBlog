# Generated by Django 5.0.6 on 2024-06-09 11:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_posts', '0011_alter_posts_timestamp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime(2024, 6, 9, 14, 40, 17, 916035)),
        ),
    ]
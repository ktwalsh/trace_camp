# Generated by Django 2.2.4 on 2019-08-15 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventapp', '0003_auto_20190813_1742'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='event',
            name='time',
            field=models.TimeField(),
        ),
    ]